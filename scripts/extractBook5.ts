import * as path from 'path';
import { parseEpub, bookToMarkdown, saveMarkdown } from '../src/utils/epubParser';
import * as fs from 'fs';

/**
 * Extract Book 5: 山雨欲来
 */
async function extractBook5() {
  const projectRoot = path.resolve(__dirname, '..');
  const epubPath = path.join(projectRoot, '货币战争5-山雨欲来.epub');
  const outputDir = path.join(projectRoot, 'markdown-books');

  console.log('='.repeat(60));
  console.log('Currency Wars Book 5 EPUB to Markdown Converter');
  console.log('='.repeat(60));
  console.log(`\nEPUB File: ${epubPath}`);
  console.log(`Output Directory: ${outputDir}\n`);

  // Check if EPUB exists
  if (!fs.existsSync(epubPath)) {
    console.error(`Error: EPUB file not found at ${epubPath}`);
    process.exit(1);
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    console.log('Parsing EPUB file...');
    console.log('-'.repeat(60));

    const bookContent = await parseEpub(epubPath);

    console.log(`\n✓ Found book: ${bookContent.metadata.title}`);
    console.log(`✓ Author: ${bookContent.metadata.author}`);
    console.log(`✓ Total chapters: ${bookContent.chapters.length}\n`);

    // Display first few chapter titles
    console.log('First 10 chapter titles:');
    bookContent.chapters.slice(0, 10).forEach((ch: any, i: number) => {
      const preview = ch.content.substring(0, 80).replace(/\n/g, ' ');
      console.log(`  ${i + 1}. ${ch.title}: ${preview}...`);
    });

    console.log('\nGenerating Markdown file...');
    console.log('-'.repeat(60));

    const markdown = bookToMarkdown(bookContent, 5);
    const filename = `currency-wars-book-5.md`;
    const outputPath = path.join(outputDir, filename);

    saveMarkdown(markdown, outputPath);

    console.log(`\n✓ Book 5: ${bookContent.metadata.title}`);
    console.log(`  Chapters: ${bookContent.chapters.length}`);
    console.log(`  File: ${filename}`);
    console.log(`  Size: ${(markdown.length / 1024).toFixed(2)} KB`);
    console.log(`  Path: ${outputPath}`);

    console.log('\n' + '='.repeat(60));
    console.log('✓ Extraction complete!');
    console.log('='.repeat(60));

  } catch (error) {
    console.error('\n✗ Error during extraction:', error);
    process.exit(1);
  }
}

// Run the extraction
extractBook5().catch(console.error);
