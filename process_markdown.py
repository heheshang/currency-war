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
    print("正在读取文件: {}".format(input_path))
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    original_line_count = len(lines)
    print("原始文件行数: {}".format(original_line_count))

    # 处理后的行列表
    processed_lines = []

    # 用于跟踪章节标题，避免重复
    seen_chapter_titles = set()

    # 用于跟踪状态
    in_section_marker = False
    skip_next_empty_lines = 0
    last_was_title = False
    last_line_empty = False

    # 正则表达式模式
    section_marker_pattern = re.compile(r'^## 章节\s+\d+\s*$')
    bullet_pattern = re.compile(r'^•\s*$')
    chapter_title_pattern = re.compile(
        r'^(?:升级版序言|序言\s+[^#\n]|(?:第[一二三四五六七八九十百]+章)\s+[^#\n]|后记(?:\s+[^#\n])?)(?<!#)$'
    )

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.rstrip('\n\r')

        # 跳过空行（如果需要）
        if skip_next_empty_lines > 0:
            if stripped == '':
                skip_next_empty_lines -= 1
                i += 1
                continue
            else:
                skip_next_empty_lines = 0

        # 1. 删除"## 章节 X"标记
        if section_marker_pattern.match(stripped):
            in_section_marker = True
            skip_next_empty_lines = 3
            i += 1
            continue

        # 2. 删除"• "符号行
        if bullet_pattern.match(stripped) and in_section_marker:
            in_section_marker = False
            skip_next_empty_lines = 2
            i += 1
            continue

        # 重置标记
        if stripped != '':
            in_section_marker = False

        # 3. 处理章节标题
        is_chapter_title = False
        if chapter_title_pattern.match(stripped):
            # 检查是否已经出现过这个标题
            if stripped not in seen_chapter_titles:
                seen_chapter_titles.add(stripped)
                title_level = '##'
                is_chapter_title = True
                # 替换当前行
                stripped = '{} {}'.format(title_level, stripped)
                line = stripped + '\n'

        # 4. 处理特殊标记 【章节名】
        if stripped.startswith('【') and '】' in stripped:
            chapter_name = stripped[1:stripped.index('】')]
            if stripped.index('】') < len(stripped) - 1:
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

        # 5. 清理多余空行
        is_empty = stripped == ''
        is_title = line.startswith('#')

        if is_empty:
            if last_line_empty:
                i += 1
                continue
            elif last_was_title:
                processed_lines.append(line)
                i += 1
                last_line_empty = True
                continue
            else:
                processed_lines.append(line)
                i += 1
                last_line_empty = True
                continue
        else:
            processed_lines.append(line)
            last_line_empty = False
            last_was_title = is_title
            i += 1

    # 删除末尾的空行
    while processed_lines and processed_lines[-1].strip() == '':
        processed_lines.pop()

    # 添加目录
    print("正在生成目录...")

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

    print("正在写入文件: {}".format(output_path))
    with open(output_path, 'w', encoding='utf-8') as f:
        f.writelines(processed_lines)

    final_line_count = len(processed_lines)
    removed_duplicates = len(seen_chapter_titles)

    print("\n处理完成！")
    print("原始行数: {}".format(original_line_count))
    print("最终行数: {}".format(final_line_count))
    print("删除行数: {}".format(original_line_count - final_line_count))
    print("处理的章节数: {}".format(removed_duplicates))
    print("生成的目录项数: {}".format(len(toc_lines) - 2))

    return {
        'original_lines': original_line_count,
        'final_lines': final_line_count,
        'removed_lines': original_line_count - final_line_count,
        'chapter_count': removed_duplicates
    }


if __name__ == '__main__':
    input_file = r'D:\soft\workspace\ai\currency-war\markdown-books\currency-wars-book-1.md'

    # 处理文件（创建备份）
    backup_file = input_file + '.backup'
    print("Creating backup: {}".format(backup_file))
    shutil.copy2(input_file, backup_file)

    result = process_markdown_file(input_file)

    print("\n" + "="*50)
    print("Processing Summary:")
    print("  Original lines: {}".format(result['original_lines']))
    print("  Final lines: {}".format(result['final_lines']))
    print("  Removed lines: {}".format(result['removed_lines']))
    print("  Processed chapters: {}".format(result['chapter_count']))
    print("="*50)
