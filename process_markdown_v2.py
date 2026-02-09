#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import sys
import shutil

# 设置标准输出编码为 UTF-8
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')


def process_markdown_file(input_path, output_path=None):
    """
    处理 Markdown 文件的排版
    """
    # 读取文件
    print("Reading file: {}".format(input_path))
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    original_line_count = len(lines)
    print("Original line count: {}".format(original_line_count))

    # 处理后的行列表
    processed_lines = []

    # 用于跟踪章节标题，避免重复
    seen_chapter_titles = set()
    duplicate_count = 0

    # 用于跟踪状态
    in_section_marker = False
    last_was_title = False
    last_line_empty = False
    last_title = ""

    # 正则表达式模式
    section_marker_pattern = re.compile(r'^## 章节\s+\d+\s*$')
    bullet_pattern = re.compile(r'^•\s*$')

    # 章节标题模式（独立成行，且不包含 ## 前缀）
    chapter_title_patterns = [
        r'^升级版序言$',
        r'^序言\s+.{2,}$',
        r'^第[一二三四五六七八九十百]+章\s+.{2,}$',
        r'^后记(?:\s+.{2,})?$'
    ]
    chapter_title_pattern = re.compile('|'.join('({})'.format(p) for p in chapter_title_patterns))

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.rstrip('\n\r')

        # 1. 删除"## 章节 X"标记
        if section_marker_pattern.match(stripped):
            in_section_marker = True
            i += 1
            # 跳过后续的空行和 • 行
            while i < len(lines):
                next_stripped = lines[i].rstrip('\n\r')
                if next_stripped == '' or bullet_pattern.match(next_stripped):
                    i += 1
                else:
                    break
            continue

        # 重置标记
        if stripped != '':
            in_section_marker = False

        # 2. 检测章节标题
        is_chapter_title = False
        if chapter_title_pattern.match(stripped) and not stripped.startswith('#'):
            # 检查是否已经出现过这个标题
            if stripped not in seen_chapter_titles:
                seen_chapter_titles.add(stripped)
                # 转换为 Markdown 标题格式
                title_level = '##'
                stripped = '{} {}'.format(title_level, stripped)
                line = stripped + '\n'
                is_chapter_title = True
                last_title = stripped
            else:
                # 跳过重复的章节标题
                duplicate_count += 1
                i += 1
                # 跳过后续的空行
                while i < len(lines) and lines[i].rstrip('\n\r') == '':
                    i += 1
                continue

        # 3. 处理特殊标记 【章节名】
        if stripped.startswith('【') and '】' in stripped:
            # 转换为小节标题
            chapter_name = stripped[1:stripped.index('】')]
            if stripped.index('】') < len(stripped) - 1:
                # 如果后面还有内容
                rest = stripped[stripped.index('】') + 1:]
                stripped = '### {}'.format(chapter_name)
                line = stripped + '\n'
                processed_lines.append(line)
                processed_lines.append(rest + '\n')
                i += 1
                last_was_title = True
                last_line_empty = False
                continue
            else:
                stripped = '### {}'.format(chapter_name)
                line = stripped + '\n'

        # 4. 清理多余空行
        is_empty = stripped == ''
        is_title = line.startswith('#')

        if is_empty:
            if last_line_empty:
                # 跳过连续的空行
                i += 1
                continue
            elif last_was_title:
                # 标题后的空行保留
                processed_lines.append(line)
                i += 1
                last_line_empty = True
                continue
            else:
                # 段落间的空行保留
                processed_lines.append(line)
                i += 1
                last_line_empty = True
                continue
        else:
            # 非空行
            processed_lines.append(line)
            last_line_empty = False
            last_was_title = is_title
            i += 1

    # 删除末尾的空行
    while processed_lines and processed_lines[-1].strip() == '':
        processed_lines.pop()

    # 添加目录
    print("Generating table of contents...")

    # 生成目录
    toc_lines = ['## 目录\n\n']

    # 找出所有章节标题
    for line in processed_lines:
        stripped = line.strip()
        if stripped.startswith('## ') and not stripped.startswith('### '):
            title = stripped[3:].strip()
            if title != '目录':
                toc_lines.append('- {}\n'.format(title))

    # 插入目录（在书名和作者之后）
    insert_index = -1
    for i, line in enumerate(processed_lines):
        if line.strip() == '---':
            # 检查是不是第一个 --- （书名后的）
            if i < 50:  # 假设目录在文件开头50行内
                insert_index = i + 1
                break

    if insert_index > 0:
        processed_lines = (
            processed_lines[:insert_index] +
            ['\n'] +
            toc_lines +
            processed_lines[insert_index:]
        )

    # 写入文件
    if output_path is None:
        output_path = input_path

    print("Writing file: {}".format(output_path))
    with open(output_path, 'w', encoding='utf-8') as f:
        f.writelines(processed_lines)

    final_line_count = len(processed_lines)

    print("\nProcessing completed!")
    print("Original line count: {}".format(original_line_count))
    print("Final line count: {}".format(final_line_count))
    print("Removed lines: {}".format(original_line_count - final_line_count))
    print("Duplicate chapter titles removed: {}".format(duplicate_count))
    print("Unique chapters processed: {}".format(len(seen_chapter_titles)))
    print("TOC entries generated: {}".format(len(toc_lines) - 2))

    return {
        'original_lines': original_line_count,
        'final_lines': final_line_count,
        'removed_lines': original_line_count - final_line_count,
        'chapter_count': len(seen_chapter_titles),
        'duplicate_count': duplicate_count,
        'toc_entries': len(toc_lines) - 2
    }


if __name__ == '__main__':
    input_file = r'D:\soft\workspace\ai\currency-war\markdown-books\currency-wars-book-1.md'

    # 处理文件（创建备份）
    backup_file = input_file + '.backup'
    print("Creating backup: {}".format(backup_file))
    shutil.copy2(input_file, backup_file)

    result = process_markdown_file(input_file)

    print("\n" + "="*60)
    print("PROCESSING SUMMARY:")
    print("  Original lines:    {}".format(result['original_lines']))
    print("  Final lines:       {}".format(result['final_lines']))
    print("  Removed lines:     {}".format(result['removed_lines']))
    print("  Unique chapters:   {}".format(result['chapter_count']))
    print("  Duplicates removed: {}".format(result['duplicate_count']))
    print("  TOC entries:       {}".format(result['toc_entries']))
    print("="*60)
