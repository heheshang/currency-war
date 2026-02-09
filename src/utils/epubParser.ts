import * as fs from "fs";
import * as path from "path";
import * as JSZip from "jszip";
import { parseStringPromise } from "xml2js";

export interface BookMetadata {
  title: string;
  author: string;
  cover?: string;
}

export interface Chapter {
  title: string;
  content: string;
  id: string;
}

export interface BookContent {
  metadata: BookMetadata;
  chapters: Chapter[];
}

// Type definitions for EPUB XML parsing
interface OpfItem {
  $: {
    id: string;
    href: string;
    "media-type": string;
  };
}

interface OpfItemRef {
  $: {
    idref: string;
  };
}

interface OpfPackage {
  metadata?: Array<{
    "dc:title"?: string[];
    "dc:creator"?: (string | { _: string })[];
  }>;
  manifest?: Array<{
    item?: OpfItem[];
  }>;
  spine?: Array<{
    itemref?: OpfItemRef[];
  }>;
}

// Type for parsed OPF XML
type ParsedOpfXml = {
  package?: OpfPackage;
};

/**
 * Helper function to extract text from HTML content
 */
function extractTextFromHtml(html: string): string {
  // Remove script and style tags
  let text = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

  // Replace block elements with newlines
  text = text.replace(/<\/(div|p|h[1-6]|li|tr|td|th)>/gi, "\n");
  text = text.replace(/<(br|hr)\s*\/?>/gi, "\n");

  // Replace list items with bullet points
  text = text.replace(/<li[^>]*>/gi, "• ");

  // Remove all other HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  text = text.replace(/&nbsp;/g, " ");
  text = text.replace(/&lt;/g, "<");
  text = text.replace(/&gt;/g, ">");
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  text = text.replace(/&hellip;/g, "…");
  text = text.replace(/&mdash;/g, "—");
  text = text.replace(/&ndash;/g, "–");
  text = text.replace(/&ldquo;/g, '"');
  text = text.replace(/&rdquo;/g, '"');
  text = text.replace(/&lsquo;/g, "'");
  text = text.replace(/&rsquo;/g, "'");

  // Clean up whitespace
  text = text.replace(/[ \t]+/g, " ");
  text = text.replace(/\n[ \t]+/g, "\n");
  text = text.replace(/[ \t]+\n/g, "\n");
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}

/**
 * Parse an EPUB file and extract all text content
 */
export async function parseEpub(filePath: string): Promise<BookContent> {
  console.log(`Reading EPUB file: ${filePath}`);

  const data = fs.readFileSync(filePath);
  const zip = await JSZip.loadAsync(data);

  const metadata: BookMetadata = {
    title: "货币战争",
    author: "宋鸿兵",
  };

  const chapters: Chapter[] = [];

  // Find and parse the OPF file (content.opf or .opf)
  let opfFile: JSZip.JSZipObject | null = null;
  let opfPath = "";

  for (const [relativePath, zipEntry] of Object.entries(zip.files)) {
    if (
      (relativePath.endsWith(".opf") || relativePath.endsWith("content.opf")) &&
      !zipEntry.dir
    ) {
      opfPath = relativePath;
      opfFile = zipEntry as JSZip.JSZipObject;
      break;
    }
  }

  if (!opfFile) {
    throw new Error("Could not find .opf file in EPUB");
  }

  const opfContent = await opfFile.async("string");
  const opfXml = (await parseStringPromise(opfContent)) as ParsedOpfXml;

  // Extract metadata
  if (opfXml.package?.metadata?.[0]) {
    const meta = opfXml.package.metadata[0];
    if (meta["dc:title"]) {
      metadata.title = meta["dc:title"][0];
    }
    if (meta["dc:creator"]) {
      // Handle both string and array formats
      const creator = meta["dc:creator"][0];
      metadata.author = typeof creator === "string" ? creator : "宋鸿兵";
    }
  }

  console.log(`Found book: ${metadata.title} by ${metadata.author}`);

  // Get the manifest (list of all files)
  const manifest: Record<string, { href: string; mediaType: string }> = {};
  if (opfXml.package?.manifest?.[0]?.item) {
    opfXml.package.manifest[0].item.forEach((item: OpfItem) => {
      manifest[item.$.id] = {
        href: item.$.href,
        mediaType: item.$["media-type"],
      };
    });
  }

  console.log(`Found ${Object.keys(manifest).length} items in manifest`);

  // Get the spine (reading order)
  const spineIds: string[] = [];
  if (opfXml.package?.spine?.[0]?.itemref) {
    opfXml.package.spine[0].itemref.forEach((ref: OpfItemRef) => {
      if (ref.$.idref) {
        spineIds.push(ref.$.idref);
      }
    });
  }

  console.log(`Processing ${spineIds.length} items in reading order`);

  // Get the directory of the OPF file to resolve relative paths
  const opfDir = path.dirname(opfPath);

  // Process each item in the spine
  for (let i = 0; i < spineIds.length; i++) {
    const spineId = spineIds[i];
    const manifestItem = manifest[spineId];

    if (!manifestItem) continue;

    // Only process HTML/XHTML files
    if (
      manifestItem.mediaType &&
      (manifestItem.mediaType.includes("html") ||
        manifestItem.mediaType.includes("xhtml"))
    ) {
      try {
        // Resolve the file path
        const contentPath = path.posix.join(opfDir, manifestItem.href);
        const contentFile = zip.file(contentPath);

        if (!contentFile) {
          console.warn(`Warning: Could not find file ${contentPath}`);
          continue;
        }

        const htmlContent = await contentFile.async("string");

        if (!htmlContent || htmlContent.length < 50) {
          continue;
        }

        // Extract text from HTML
        const textContent = extractTextFromHtml(htmlContent);

        // Only add if there's meaningful content
        if (textContent.length > 50) {
          chapters.push({
            id: spineId,
            title: `章节 ${chapters.length + 1}`,
            content: textContent,
          });
        }

        if ((i + 1) % 10 === 0) {
          console.log(`Processed ${i + 1}/${spineIds.length} chapters...`);
        }
      } catch (err) {
        console.warn(`Warning: Could not load chapter ${spineId}:`, err);
      }
    }
  }

  console.log(`Successfully extracted ${chapters.length} chapters`);

  return {
    metadata,
    chapters,
  };
}

/**
 * Convert book content to Markdown format
 */
export function bookToMarkdown(book: BookContent): string {
  let markdown = `# ${book.metadata.title}\n\n`;
  markdown += `**作者**: ${book.metadata.author}\n\n`;
  markdown += `---\n\n`;

  book.chapters.forEach((chapter) => {
    if (chapter.content && chapter.content.trim().length > 0) {
      markdown += `## ${chapter.title}\n\n`;
      markdown += `${chapter.content}\n\n`;
      markdown += `---\n\n`;
    }
  });

  return markdown;
}

/**
 * Save Markdown content to file
 */
export function saveMarkdown(markdown: string, outputPath: string): void {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, markdown, "utf-8");
}

/**
 * Main function to extract EPUB and save as Markdown
 */
export async function extractEpubToMarkdown(
  epubPath: string,
  outputDir: string,
  bookNumber: number,
): Promise<string> {
  console.log(`Parsing EPUB: ${epubPath}`);
  const bookContent = await parseEpub(epubPath);
  console.log(`Found ${bookContent.chapters.length} chapters`);

  const markdown = bookToMarkdown(bookContent);

  const filename = `currency-wars-${bookNumber}.md`;
  const outputPath = path.join(outputDir, filename);

  saveMarkdown(markdown, outputPath);
  console.log(`Saved Markdown to: ${outputPath}`);

  return outputPath;
}
