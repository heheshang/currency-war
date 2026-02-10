# -*- coding: utf-8 -*-
"""
提取《货币战争》第二册（金权天下）的所有章节到markdown文件
"""

import os
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 输入输出路径
txt_file = r'd:/soft/workspace/ai/currency-war/Huo Bi Zhan Zheng (1~4Shi Ti Sh - Song Hong Bing.txt'
output_dir = r'd:/soft/workspace/ai/currency-war/markdown-books'

# 第二册章节结构（行号范围）
chapters = [
    {
        "title": "第一章",
        "subtitle": "德国：国际银行家的发源地",
        "start_line": 9126,
        "end_line": 10069,
        "filename": "currency-wars-book-2-chapter-01.md"
    },
    {
        "title": "第二章",
        "subtitle": "英国：金权的制高点",
        "start_line": 10069,
        "end_line": 10925,
        "filename": "currency-wars-book-2-chapter-02.md"
    },
    {
        "title": "第三章",
        "subtitle": "法国：金权的割据",
        "start_line": 10925,
        "end_line": 11640,
        "filename": "currency-wars-book-2-chapter-03.md"
    },
    {
        "title": "第四章",
        "subtitle": "美国：金权的圈里人",
        "start_line": 11640,
        "end_line": 12363,
        "filename": "currency-wars-book-2-chapter-04.md"
    },
    {
        "title": "第五章",
        "subtitle": "动荡的欧洲",
        "start_line": 12363,
        "end_line": 13243,
        "filename": "currency-wars-book-2-chapter-05.md"
    },
    {
        "title": "第六章",
        "subtitle": "希特勒新政",
        "start_line": 13243,
        "end_line": 14399,
        "filename": "currency-wars-book-2-chapter-06.md"
    },
    {
        "title": "第七章",
        "subtitle": "银行家与情报网",
        "start_line": 14399,
        "end_line": 15281,
        "filename": "currency-wars-book-2-chapter-07.md"
    },
    {
        "title": "第八章",
        "subtitle": "统治精英与隐形寡头",
        "start_line": 15281,
        "end_line": 16577,
        "filename": "currency-wars-book-2-chapter-08.md"
    },
    {
        "title": "第九章",
        "subtitle": "金融海啸之后",
        "start_line": 16577,
        "end_line": 17307,
        "filename": "currency-wars-book-2-chapter-09.md"
    },
    {
        "title": "第十章",
        "subtitle": "回到未来",
        "start_line": 17307,
        "end_line": 18142,
        "filename": "currency-wars-book-2-chapter-10.md"
    },
]

# 读取txt文件
print(f"正在读取文件: {txt_file}")
with open(txt_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 提取每个章节
for chapter in chapters:
    print(f"\n正在处理: {chapter['title']} - {chapter['subtitle']}")

    # 提取内容（行号从1开始，所以要减1）
    content_lines = lines[chapter['start_line']-1:chapter['end_line']-1]
    content = ''.join(content_lines)

    # 清理内容：移除"返回货币战争②金权天下"等行
    import re
    content = re.sub(r'返回货币战争[②②]金权天下\s*', '', content)
    content = re.sub(r'\n{3,}', '\n\n', content)

    # 生成markdown内容
    md_content = f"""# {chapter['title']}

## {chapter['subtitle']}

---

{content}
"""

    # 保存文件
    output_path = os.path.join(output_dir, chapter['filename'])
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    print(f"  已保存: {chapter['filename']} ({len(content)} 字符)")

print("\n第二册所有章节提取完成！")
