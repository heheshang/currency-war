import pypdf
import sys
import io
import re
import os

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
output_dir = r'd:/soft/workspace/ai/currency-war/markdown-books'

# 确保输出目录存在
os.makedirs(output_dir, exist_ok=True)

reader = pypdf.PdfReader(pdf_path)

# 章节结构定义（根据agent分析结果）
chapters = [
    # 序言
    {
        "title": "序言",
        "subtitle": "起航的中国经济航母，会一帆风顺吗？",
        "author": "赵煜堃",
        "start_page": 8,
        "end_page": 10,
        "filename": "currency-wars-book-1-preface.md"
    },
    # 第1章
    {
        "title": "第一章",
        "subtitle": "罗斯柴尔德：银行业幕后的帝王世家",
        "start_page": 12,
        "end_page": 34,
        "filename": "currency-wars-book-1-chapter-01.md"
    },
    # 第2章
    {
        "title": "第二章",
        "subtitle": "国际银行家与美国独立战争",
        "start_page": 35,
        "end_page": 66,
        "filename": "currency-wars-book-1-chapter-02.md"
    },
    # 第3章
    {
        "title": "第三章",
        "subtitle": "美联储：私有中央银行的建立",
        "start_page": 67,
        "end_page": 97,
        "filename": "currency-wars-book-1-chapter-03.md"
    },
    # 第4章
    {
        "title": "第四章",
        "subtitle": "一战与大衰退：国际银行家的丰收时节",
        "start_page": 98,
        "end_page": 123,
        "filename": "currency-wars-book-1-chapter-04.md"
    },
    # 第5章
    {
        "title": "第五章",
        "subtitle": "世界政府与国际银行家",
        "start_page": 124,
        "end_page": 149,
        "filename": "currency-wars-book-1-chapter-05.md"
    },
    # 第6章
    {
        "title": "第六章",
        "subtitle": "银本位的终结与特别提款权",
        "start_page": 150,
        "end_page": 170,
        "filename": "currency-wars-book-1-chapter-06.md"
    },
    # 第7章
    {
        "title": "第七章",
        "subtitle": "诚实货币的最后抗争",
        "start_page": 171,
        "end_page": 196,
        "filename": "currency-wars-book-1-chapter-07.md"
    },
    # 第8章
    {
        "title": "第八章",
        "subtitle": "金融核弹：目标东京",
        "start_page": 197,
        "end_page": 225,
        "filename": "currency-wars-book-1-chapter-08.md"
    },
    # 第9章
    {
        "title": "第九章",
        "subtitle": "美元死穴与黄金一阳指",
        "start_page": 226,
        "end_page": 257,
        "filename": "currency-wars-book-1-chapter-09.md"
    },
    # 第10章（后记）
    {
        "title": "第十章",
        "subtitle": "对中国金融开放的几点看法",
        "start_page": 258,
        "end_page": 277,
        "filename": "currency-wars-book-1-chapter-10.md"
    },
]

# 清理文本的函数
def clean_text(text):
    # 移除水印
    text = re.sub(r'see more please visit: https://homeofpdf\.com', '', text)
    # 移除多余的空白行
    text = re.sub(r'\n{3,}', '\n\n', text)
    # 移除行首尾空格
    lines = [line.strip() for line in text.split('\n')]
    text = '\n'.join(lines)
    return text.strip()

# 提取章节内容
def extract_chapter_content(start_page, end_page):
    content = []
    for page_num in range(start_page - 1, min(end_page, len(reader.pages))):
        page = reader.pages[page_num]
        text = page.extract_text()
        if text:
            content.append(text)
    return '\n\n'.join(content)

# 处理每个章节
for chapter in chapters:
    print(f"\n正在处理: {chapter['title']} - {chapter['subtitle']}")

    # 提取内容
    raw_content = extract_chapter_content(chapter['start_page'], chapter['end_page'])
    clean_content = clean_text(raw_content)

    # 生成markdown内容
    md_content = f"""# {chapter['title']}

## {chapter['subtitle']}

"""
    if 'author' in chapter:
        md_content += f"**作者**: {chapter['author']}\n\n"

    md_content += f"""*(PDF页码范围: 第{chapter['start_page']}-{chapter['end_page']}页)*

---

{clean_content}
"""

    # 保存文件
    output_path = os.path.join(output_dir, chapter['filename'])
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    print(f"  已保存: {chapter['filename']} ({len(clean_content)} 字符)")

print("\n所有章节提取完成！")
