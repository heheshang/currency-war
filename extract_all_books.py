#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Currency Wars Book Extractor
Extracts all 4 books from the consolidated Currency Wars text file
and creates separate markdown files for each chapter.
"""

import re
import os
import sys
from pathlib import Path

# Fix encoding for Windows console
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

# File paths
SOURCE_FILE = r"d:\soft\workspace\ai\currency-war\Huo Bi Zhan Zheng (1~4Shi Ti Sh - Song Hong Bing.txt"
OUTPUT_DIR = r"d:\soft\workspace\ai\currency-war\markdown-books"

# Book structure with line numbers (based on analysis)
# Using raw strings to avoid quote issues
BOOKS = [
    {
        "id": "book1",
        "title": "货币战争①（升级版）",
        "start_line": 18,
        "end_line": 9034,
        "chapters": [
            r'第一章 罗斯柴尔德家族："大道无形"的世界首富',
            "第二章 国际银行家和美国总统的百年战争",
            "第三章 美联储：私有的中央银行",
            r'第四章 "一战"与大衰退：国际银行家的"丰收时节"',
            r'第五章 廉价货币的"新政"',
            "第六章 统治世界的精英俱乐部",
            "第七章 诚实货币的最后抗争",
            "第八章 不宣而战的货币战争",
            "第九章 美元死穴与黄金一阳指",
            "第十章 谋万世者",
        ]
    },
    {
        "id": "book2",
        "title": "货币战争②金权天下",
        "start_line": 9035,
        "end_line": 18133,
        "chapters": [
            "第一章 德国：国际银行家的发源地",
            "第二章 英国：金权的制高点",
            "第三章 法国：金权的割据",
            r'第四章 美国：金权的"圈里人"',
            "第五章 动荡的欧洲",
            r'第六章 希特勒"新政"',
            "第七章 银行家与情报网",
            r'第八章 统治精英与"隐形寡头"',
            "第九章 金融海啸之后",
            "第十章 回到未来",
        ]
    },
    {
        "id": "book3",
        "title": "货币战争③金融高边疆",
        "start_line": 18134,
        "end_line": 27381,
        "chapters": [
            "第一章 金融高边疆的陷落",
            "第二章 明治维新与洋务运动",
            r'第三章 "四一二"政变：蒋介石的"投名状"',
            "第四章 红色中央银行",
            "第五章 蒋介石的金权天下",
            "第六章 皇权与金权",
            "第七章 金陵梦断",
            "第八章 人民币的诞生",
            "第九章 金融高边疆与人民币国际化",
            "第十章 白银的光荣与梦想",
        ]
    },
    {
        "id": "book4",
        "title": "货币战争④战国时代",
        "start_line": 27382,
        "end_line": 34794,
        "chapters": [
            "第一章 雄心初起，美元失败的远征",
            "第二章 摄政天下，剿灭英镑割据",
            "第三章 货币冷战，拒绝美元就是拒绝和平",
            "第四章 合纵连横，欧洲货币的崛起与困惑",
            "第五章 东方欲晓，中日工业化的角力",
            "第六章 蛇形渐进，通往欧洲合众国的欧元之路",
            "第七章 债务驱动，美利坚盛世的脆弱",
            "第八章 亢龙有悔，中国模式3.0的升级",
            "第九章 战国时代，地平线上的亚元",
        ]
    }
]

# Chapter start line mappings (actual content starts, not TOC)
CHAPTER_STARTS = {
    # Book 1
    ("book1", 1): 226,
    ("book1", 2): 932,
    ("book1", 3): 1866,
    ("book1", 4): 2847,
    ("book1", 5): 3694,
    ("book1", 6): 4330,
    ("book1", 7): 4985,
    ("book1", 8): 5734,
    ("book1", 9): 6563,
    ("book1", 10): 7316,
    # Book 2
    ("book2", 1): 9126,
    ("book2", 2): 10069,
    ("book2", 3): 10925,
    ("book2", 4): 11640,
    ("book2", 5): 12363,
    ("book2", 6): 13243,
    ("book2", 7): 14399,
    ("book2", 8): 15281,
    ("book2", 9): 16577,
    ("book2", 10): 17307,
    # Book 3
    ("book3", 1): 18269,
    ("book3", 2): 19174,
    ("book3", 3): 19956,
    ("book3", 4): 20854,
    ("book3", 5): 21889,
    ("book3", 6): 22831,
    ("book3", 7): 23784,
    ("book3", 8): 24520,
    ("book3", 9): 25509,
    ("book3", 10): 26259,
    # Book 4
    ("book4", 1): 27511,
    ("book4", 2): 28389,
    ("book4", 3): 29267,
    ("book4", 4): 30092,
    ("book4", 5): 30905,
    ("book4", 6): 31637,
    ("book4", 7): 32518,
    ("book4", 8): 33250,
    ("book4", 9): 33967,
}


def sanitize_filename(title):
    """Convert chapter title to safe filename."""
    # Extract chapter number and title
    match = re.match(r'(第.+章)\s*(.*)', title)
    if match:
        chapter_num = match.group(1)
        chapter_title = match.group(2).strip()
        # Remove problematic characters
        chapter_title = re.sub(r'[<>:"/\\|?*]', '', chapter_title)
        chapter_title = re.sub(r'[\s""'']', '', chapter_title)
        # Limit length
        if len(chapter_title) > 50:
            chapter_title = chapter_title[:50]
        return f"{chapter_num}-{chapter_title}"
    return re.sub(r'[<>:"/\\|?*]', '', title)[:50]


def read_file_lines(filepath):
    """Read file and return lines as list."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.readlines()


def extract_chapter_content(lines, book_id, chapter_num, next_chapter_line=None):
    """Extract content for a single chapter."""
    start_line = CHAPTER_STARTS.get((book_id, chapter_num))
    if start_line is None:
        return None

    # Convert to 0-indexed
    start = start_line - 1

    # End is either next chapter start or None (read till end)
    if next_chapter_line:
        end = next_chapter_line - 1
    else:
        end = None

    chapter_lines = lines[start:end]
    return ''.join(chapter_lines)


def extract_book_intro(lines, book_info, book_id):
    """Extract introduction content for a book."""
    # Intro starts at book title line and goes until first chapter
    start = book_info['start_line'] - 1

    # Find first chapter content start
    first_chapter_line = CHAPTER_STARTS.get((book_id, 1))

    if first_chapter_line:
        end = first_chapter_line - 1
    else:
        end = start + 100  # Fallback

    return lines[start:end]


def main():
    """Main extraction function."""
    print("=" * 60)
    print("Currency Wars Book Extractor")
    print("=" * 60)

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Read source file
    print(f"\nReading source file: {SOURCE_FILE}")
    lines = read_file_lines(SOURCE_FILE)
    print(f"Total lines: {len(lines)}")

    # Process each book
    for book_info in BOOKS:
        book_id = book_info['id']
        book_num = book_id[-1]  # Get book number (1, 2, 3, 4)

        print(f"\n{'=' * 60}")
        print(f"Processing: {book_info['title']}")
        print(f"Lines: {book_info['start_line']}-{book_info['end_line']}")
        print(f"Chapters: {len(book_info['chapters'])}")

        # Extract and save introduction/preface
        intro_content = extract_book_intro(lines, book_info, book_id)
        intro_file = os.path.join(OUTPUT_DIR, f"{book_id}-introduction.md")

        with open(intro_file, 'w', encoding='utf-8') as f:
            f.write(f"# {book_info['title']}\n\n")
            f.write(''.join(intro_content))
        print(f"  Saved: {os.path.basename(intro_file)}")

        # Extract each chapter
        for i, chapter_title in enumerate(book_info['chapters'], 1):
            # Get next chapter start line (for ending this chapter)
            next_chapter_line = None
            if i < len(book_info['chapters']):
                next_chapter_line = CHAPTER_STARTS.get((book_id, i + 1))
            elif i == len(book_info['chapters']) and book_info['end_line']:
                # Last chapter: use book end line
                next_chapter_line = book_info['end_line'] + 1

            # Extract chapter content
            content = extract_chapter_content(lines, book_id, i, next_chapter_line)

            if content:
                # Create filename
                filename = sanitize_filename(chapter_title)
                output_file = os.path.join(OUTPUT_DIR, f"{book_id}-{filename}.md")

                # Write to file
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(f"# {chapter_title}\n\n")
                    f.write(content)

                print(f"  Saved Chapter {i}: {filename}.md")
            else:
                print(f"  Warning: Could not extract Chapter {i}")

    print(f"\n{'=' * 60}")
    print("Extraction complete!")
    print(f"Output directory: {OUTPUT_DIR}")

    # Count output files
    output_files = list(Path(OUTPUT_DIR).glob("book*.md"))
    print(f"Total files created: {len(output_files)}")


if __name__ == "__main__":
    main()
