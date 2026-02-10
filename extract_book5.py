#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
《货币战争⑤山雨欲来》内容提取脚本
将内容按章节提取到markdown-books目录
"""

import os
import re
import sys

# 设置标准输出编码为UTF-8
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')

# 源文件路径
SOURCE_FILE = "d:/soft/workspace/ai/currency-war/Huo Bi Zhan Zheng 5_Shan Yu Yu - Song Hong Bing.txt"
# 输出目录
OUTPUT_DIR = "d:/soft/workspace/ai/currency-war/markdown-books"

# 第五册的章节结构（根据目录定义）
# 注意：第九章标题中包含中文引号，使用正则表达式匹配

def sanitize_filename(name):
    """清理文件名中的特殊字符"""
    # 替换Windows不允许的字符
    name = name.replace(':', '：')
    name = name.replace('?', '？')
    name = name.replace('"', '')
    name = name.replace('/', '-')
    name = name.replace('\\', '-')
    name = name.replace('|', '-')
    name = name.replace('*', '')
    name = name.replace('<', '')
    name = name.replace('>', '')
    return name

def extract_chapters():
    """提取第五册的各章节内容"""
    print(f"正在读取文件: {SOURCE_FILE}")

    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    print(f"文件共 {len(lines)} 行")

    # 找到各个章节的起始行（跳过目录部分，从正文开始）
    chapter_positions = []

    # 正文起始行（目录部分大约在前面30行）
    CONTENT_START_LINE = 35

    # 定义章节模式（使用正则表达式匹配）
    chapter_patterns = [
        ("自序", "book5-introduction", r"^自序$"),
        ("第一章 黄金斩首，打响美元保卫战", "book5-chapter01-黄金斩首", r"^第一章 黄金斩首"),
        ("第二章 真相隧道，穿越泡沫的空间", "book5-chapter02-真相隧道", r"^第二章 真相隧道"),
        ("第三章 钱荒惊魂，梦游的影子狂欢", "book5-chapter03-钱荒惊魂", r"^第三章 钱荒惊魂"),
        ("第四章 利率火山，最后的审判日", "book5-chapter04-利率火山", r"^第四章 利率火山"),
        ("第五章 风云再起，华尔街炒房团在行动", "book5-chapter05-风云再起", r"^第五章 风云再起"),
        ("第六章 财富分裂，折断了梦想的翅膀", "book5-chapter06-财富分裂", r"^第六章 财富分裂"),
        ("第七章 罗马盛衰，浴血的贪婪之路", "book5-chapter07-罗马盛衰", r"^第七章 罗马盛衰"),
        ("第八章 北宋兴亡，铅华洗尽的沧桑", "book5-chapter08-北宋兴亡", r"^第八章 北宋兴亡"),
        ("第九章 什么不是.*中国梦.*", "book5-chapter09-什么不是中国梦", r"^第九章 什么不是"),
        ("后记", "book5-epilogue", r"^后记$"),
    ]

    # 找各章节位置（从正文开始）
    for i in range(CONTENT_START_LINE, len(lines)):
        line_stripped = lines[i].strip()
        for title, filename, pattern in chapter_patterns:
            if re.match(pattern, line_stripped):
                # 使用实际行中的标题
                chapter_positions.append((i, line_stripped, filename))
                break

    # 按行号排序并去重
    seen_titles = set()
    unique_positions = []
    for pos, title, filename in sorted(chapter_positions, key=lambda x: x[0]):
        if title not in seen_titles:
            seen_titles.add(title)
            unique_positions.append((pos, title, filename))

    chapter_positions = unique_positions

    print(f"\n找到 {len(chapter_positions)} 个章节:")
    for pos, title, _ in chapter_positions:
        print(f"  行 {pos}: {title}")

    # 提取各章节内容
    print("\n开始提取章节内容...")

    for i, (start_line, chapter_title, filename) in enumerate(chapter_positions):
        # 确定结束行
        if i < len(chapter_positions) - 1:
            end_line = chapter_positions[i + 1][0]
        else:
            end_line = len(lines)

        # 提取内容
        content_lines = lines[start_line:end_line]

        # 组合内容
        content = ''.join(content_lines)

        # 写入文件
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.md")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"# {chapter_title}\n\n")
            f.write(content)

        print(f"  已创建: {filename}.md ({len(content_lines)} 行)")

    print(f"\n提取完成！共创建 {len(chapter_positions)} 个文件")

def main():
    """主函数"""
    # 确保输出目录存在
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    extract_chapters()

if __name__ == "__main__":
    main()
