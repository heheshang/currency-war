import * as path from 'path';
import { parseEpub, bookToMarkdown, saveMarkdown } from '../src/utils/epubParser';
import * as fs from 'fs';

/**
 * Analyze chapter content to determine which book it belongs to
 */
function determineBookNumber(chapterTitle: string, chapterContent: string, currentIndex: number, totalChapters: number): number {
  const text = (chapterTitle + ' ' + chapterContent);

  // Look for explicit book markers
  if (text.includes('货币战争②金权天下') || text.includes('货币战争2') || text.includes('金权天下')) {
    // Make sure this is actually Book 2 content, not just a reference
    if (text.includes('金权天下') && text.includes('完稿了')) {
      return 2;
    }
    if (text.includes('第二章') && text.includes('金权天下')) {
      return 2;
    }
  }

  if (text.includes('货币战争③金融高边疆') || text.includes('货币战争3') || text.includes('金融高边疆')) {
    if (text.includes('第三章') || text.includes('金融高边疆')) {
      return 3;
    }
  }

  if (text.includes('货币战争④战国时代') || text.includes('货币战争4') || text.includes('战国时代')) {
    if (text.includes('第四章') || text.includes('战国时代')) {
      return 4;
    }
  }

  // If we find "返回货币战争" (Return to Currency War), it indicates the end of a book
  if (text.includes('返回货币战争①') || text.includes('返回总目录')) {
    // This is likely still Book 1 content or a navigation page
    return 1;
  }

  // Default: determine by position in the collection
  // The first ~25% is Book 1, next ~25% is Book 2, etc.
  const quarter = Math.floor(totalChapters / 4);
  if (currentIndex < quarter * 1.2) {
    return 1;
  } else if (currentIndex < quarter * 2.2) {
    return 2;
  } else if (currentIndex < quarter * 3.2) {
    return 3;
  } else {
    return 4;
  }
}

/**
 * Split a complete collection into individual books
 */
function splitIntoBooks(completeContent: any): any[] {
  const books: any[] = [
    { metadata: { ...completeContent.metadata, title: '货币战争1：债务的魔咒' }, chapters: [] },
    { metadata: { ...completeContent.metadata, title: '货币战争2：金权天下' }, chapters: [] },
    { metadata: { ...completeContent.metadata, title: '货币战争3：金融高边疆' }, chapters: [] },
    { metadata: { ...completeContent.metadata, title: '货币战争4：战国时代' }, chapters: [] }
  ];

  let currentBook = 1;
  let transitionCount = 0;

  completeContent.chapters.forEach((chapter: any, index: number) => {
    const text = chapter.title + ' ' + chapter.content;

    // Detect transitions between books by looking for specific markers
    let detectedBook = currentBook;

    if (text.includes('货币战争①') || text.includes('货币战争(升级版)') || text.includes('返回总目录')) {
      detectedBook = 1;
    } else if (text.includes('货币战争②金权天下') && (text.includes('完稿了') || text.includes('第二章'))) {
      detectedBook = 2;
    } else if (text.includes('货币战争③金融高边疆') && text.includes('第三章')) {
      detectedBook = 3;
    } else if (text.includes('货币战争④战国时代') && text.includes('第四章')) {
      detectedBook = 4;
    }

    // If we detected a book transition
    if (detectedBook !== currentBook && detectedBook > currentBook) {
      currentBook = detectedBook;
      transitionCount++;
      console.log(`  → Transition to Book ${currentBook} detected at chapter ${index + 1}`);
    }

    // Add chapter to the appropriate book
    books[currentBook - 1].chapters.push(chapter);
  });

  console.log(`\n  Total transitions detected: ${transitionCount}`);

  return books;
}

/**
 * Main extraction function
 */
async function extractAllBooks() {
  const projectRoot = path.resolve(__dirname, '..');
  const epubPath = path.join(projectRoot, '货币战争（1～4实体书版全集）-宋鸿兵.epub');
  const outputDir = path.join(projectRoot, 'markdown-books');

  console.log('='.repeat(60));
  console.log('Currency Wars EPUB to Markdown Converter');
  console.log('='.repeat(60));
  console.log(`\nEPUB File: ${epubPath}`);
  console.log(`Output Directory: ${outputDir}\n`);

  // Check if EPUB exists
  if (!fs.existsSync(epubPath)) {
    console.error(`Error: EPUB file not found at ${epubPath}`);
    process.exit(1);
  }

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}\n`);
  }

  try {
    console.log('Step 1: Parsing EPUB file...');
    console.log('-'.repeat(60));
    const completeBook = await parseEpub(epubPath);
    console.log(`✓ Found ${completeBook.chapters.length} chapters total\n`);

    console.log('Step 2: Analyzing and splitting into individual books...');
    console.log('-'.repeat(60));

    // Display some chapter titles for analysis
    console.log('\nFirst 10 chapter titles:');
    completeBook.chapters.slice(0, 10).forEach((ch: any, i: number) => {
      const preview = ch.content.substring(0, 100).replace(/\n/g, ' ');
      console.log(`  ${i + 1}. ${ch.title}: ${preview}...`);
    });
    console.log('...\n');

    // Split into individual books
    const books = splitIntoBooks(completeBook);

    console.log('Step 3: Generating Markdown files...');
    console.log('-'.repeat(60));

    // Save each book as a separate markdown file
    books.forEach((book, index) => {
      const bookNum = index + 1;

      if (book.chapters.length > 0) {
        const markdown = bookToMarkdown(book, bookNum);
        const filename = `currency-wars-book-${bookNum}.md`;
        const outputPath = path.join(outputDir, filename);

        saveMarkdown(markdown, outputPath);

        console.log(`\n✓ Book ${bookNum}: ${book.metadata.title}`);
        console.log(`  Chapters: ${book.chapters.length}`);
        console.log(`  File: ${filename}`);
        console.log(`  Size: ${(markdown.length / 1024).toFixed(2)} KB`);
      } else {
        console.log(`\n⚠ Book ${bookNum}: No chapters found`);
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log('✓ Extraction complete!');
    console.log(`✓ Markdown files saved to: ${outputDir}`);
    console.log('='.repeat(60));

    // Print summary
    console.log('\nSummary:');
    books.forEach((book, index) => {
      const bookNum = index + 1;
      console.log(`  Book ${bookNum}: ${book.chapters.length} chapters`);
    });

  } catch (error) {
    console.error('\n✗ Error during extraction:', error);
    process.exit(1);
  }
}

// Run the extraction
extractAllBooks().catch(console.error);
