#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
优化货币战争Markdown文件的脚本
- 分离货币战争1和货币战争2的内容
- 清理冗余元数据
- 生成独立的目录
"""

import os
from pathlib import Path


def main():
    import sys

    # 设置输出编码为UTF-8
    if sys.platform == 'win32':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

    # 文件路径
    base_dir = Path(r"D:\soft\workspace\ai\currency-war\markdown-books")
    input_file = base_dir / "currency-wars-book-1.md"
    book1_output = base_dir / "currency-wars-book-1.md"
    book2_output = base_dir / "currency-wars-book-2.md"

    print("=" * 60)
    print("货币战争文件优化脚本")
    print("=" * 60)

    # 读取原始文件
    print(f"\n正在读取文件: {input_file}")
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    total_lines = len(lines)
    print(f"文件总行数: {total_lines}")

    # 分析文件结构
    print("\n正在分析文件结构...")

    # 查找关键位置
    book1_toc_start = None  # 货币战争1目录开始
    book1_toc_end = None    # 货币战争1目录结束
    book1_content_start = None  # 货币战争1内容开始（升级版序言）
    book1_end = None        # 货币战争1内容结束（后记之后）
    book2_start = None      # 货币战争2开始标记

    # 查找货币战争1的目录位置
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped == "## 目录":
            if book1_toc_start is None:
                book1_toc_start = i
        elif stripped == "- 后记 对中国金融开放的几点看法":
            book1_toc_end = i
        elif stripped == "## 升级版序言":
            book1_content_start = i
            break

    # 查找货币战争1的结束位置（后记内容之后的分隔线）
    for i in range(book1_content_start, len(lines)):
        stripped = lines[i].strip()
        # 查找货币战争2的开始标记
        if "货币战争②金权天下" in stripped:
            book2_start = i
            # 往前找到分隔线
            for j in range(i - 1, max(0, i - 10), -1):
                if lines[j].strip() == "---":
                    book1_end = j
                    break
            break

    # 如果没找到，使用默认值
    if book1_end is None:
        book1_end = len(lines) - 1
        book2_start = len(lines)

    print(f"\n文件结构分析结果:")
    print(f"  货币战争1目录开始: 第{book1_toc_start + 1}行")
    print(f"  货币战争1目录结束: 第{book1_toc_end + 1}行")
    print(f"  货币战争1内容开始: 第{book1_content_start + 1}行")
    print(f"  货币战争1内容结束: 第{book1_end + 1}行")
    print(f"  货币战争2开始: 第{book2_start + 1}行")

    # ========== 处理货币战争1 ==========
    print("\n" + "=" * 60)
    print("处理货币战争1")
    print("=" * 60)

    book1_lines = []

    # 1. 添加书名和作者（前6行）
    book1_lines.extend(lines[0:6])

    # 2. 添加目录（只包含货币战争1的章节）
    book1_lines.append("\n## 目录\n\n")

    # 货币战争1的章节列表
    book1_chapters = [
        "升级版序言",
        "序言 起航的中国经济航母，会一帆风顺吗？",
        '第一章 罗斯柴尔德家族："大道无形"的世界首富',
        "第二章 国际银行家和美国总统的百年战争",
        "第三章 美联储：私有的中央银行",
        '第四章 "一战"与大衰退：国际银行家的"丰收时节"',
        '第五章 廉价货币的"新政"',
        "第六章 统治世界的精英俱乐部",
        "第七章 诚实货币的最后抗争",
        "第八章 不宣而战的货币战争",
        "第九章 美元死穴与黄金一阳指",
        "第十章 谋万世者",
        "后记 对中国金融开放的几点看法"
    ]

    for chapter in book1_chapters:
        book1_lines.append(f"- {chapter}\n")

    book1_lines.append("\n---\n\n")

    # 3. 添加正文内容（从升级版序言到后记结束）
    book1_lines.extend(lines[book1_content_start:book1_end])

    # 写入货币战争1文件
    print(f"\n写入货币战争1文件: {book1_output}")
    with open(book1_output, 'w', encoding='utf-8') as f:
        f.writelines(book1_lines)

    print(f"货币战争1最终行数: {len(book1_lines)}")

    # ========== 处理货币战争2 ==========
    print("\n" + "=" * 60)
    print("处理货币战争2")
    print("=" * 60)

    # 查找货币战争2的实际内容开始（自序之后）
    book2_content_start = None
    for i in range(book2_start, len(lines)):
        if lines[i].strip() == "自序":
            # 查找第二个"自序"，这是实际内容的开始
            for j in range(i + 1, len(lines)):
                if lines[j].strip() == "自序":
                    book2_content_start = j + 1
                    break
            break

    print(f"\n货币战争2内容开始: 第{book2_content_start + 1}行")

    book2_lines = []

    # 1. 添加书名和作者
    book2_lines.append("# 货币战争2：金权天下\n\n")
    book2_lines.append("**作者**: 宋鸿兵\n\n")
    book2_lines.append("---\n\n")

    # 2. 添加目录
    book2_lines.append("## 目录\n\n")

    # 货币战争2的章节列表
    book2_chapters = [
        "自序",
        "第一章 德国：国际银行家的发源地",
        "第二章 英国：金权的制高点",
        "第三章 法国：金权的割据",
        '第四章 美国：金权的"圈里人"',
        "第五章 动荡的欧洲",
        '第六章 希特勒"新政"',
        "第七章 银行家与情报网",
        '第八章 统治精英与"隐形寡头"',
        "第九章 金融海啸之后",
        "第十章 回到未来",
        "致谢与感悟"
    ]

    for chapter in book2_chapters:
        book2_lines.append(f"- {chapter}\n")

    book2_lines.append("\n---\n\n")

    # 3. 添加自序章节标题
    book2_lines.append("## 自序\n\n")

    # 4. 添加正文内容（从自序内容开始到文件末尾）
    # 需要跳过重复的标题行
    content_lines = lines[book2_content_start:]

    # 过滤掉重复的章节标题行（目录中已有的）
    skip_patterns = [
        "## 第一章 德国：国际银行家的发源地",
        "## 第二章 英国：金权的制高点",
        "## 第三章 法国：金权的割据",
        '## 第四章 美国：金权的"圈里人"',
        "## 第五章 动荡的欧洲",
        '## 第六章 希特勒"新政"',
        "## 第七章 银行家与情报网",
        '## 第八章 统治精英与"隐形寡头"',
        "## 第九章 金融海啸之后",
        "## 第十章 回到未来"
    ]

    for line in content_lines:
        stripped = line.strip()
        # 跳过重复的章节标题
        if stripped in skip_patterns:
            continue
        # 跳过"致谢与感悟"和"返回总目录"等导航文字
        if stripped in ["致谢与感悟", "返回总目录", "返回货币战争②金权天下"]:
            continue
        book2_lines.append(line)

    # 写入货币战争2文件
    print(f"\n写入货币战争2文件: {book2_output}")
    with open(book2_output, 'w', encoding='utf-8') as f:
        f.writelines(book2_lines)

    print(f"货币战争2最终行数: {len(book2_lines)}")

    # ========== 处理总结 ==========
    print("\n" + "=" * 60)
    print("优化完成总结")
    print("=" * 60)

    print(f"\n原始文件:")
    print(f"  文件: {input_file}")
    print(f"  总行数: {total_lines}")

    print(f"\n货币战争1 (currency-wars-book-1.md):")
    print(f"  行数: {len(book1_lines)}")
    print(f"  章节数: {len(book1_chapters)}")
    print(f"  内容: 升级版序言 + 序言 + 第一-十章 + 后记")

    print(f"\n货币战争2 (currency-wars-book-2.md):")
    print(f"  行数: {len(book2_lines)}")
    print(f"  章节数: {len(book2_chapters)}")
    print(f"  内容: 自序 + 第一-十章 + 致谢与感悟")

    print("\n处理的问题:")
    print("  ✓ 清理了目录中的货币战争2章节")
    print("  ✓ 删除了冗余的元数据（bookcover、书籍介绍、总目录等）")
    print("  ✓ 分离了货币战争2的内容到独立文件")
    print("  ✓ 为货币战争2生成了独立的目录结构")
    print("  ✓ 优化了排版和格式")

    print("\n" + "=" * 60)


if __name__ == "__main__":
    main()
