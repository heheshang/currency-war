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
    # 第1章
    {
        "title": "第一章",
        "subtitle": "德国：国际银行家的发源地",
        "start_page": 317,
        "end_page": 356,
        "filename": "currency-wars-book-2-chapter-01.md"
    },
    # 第2章
    {
        "title": "第二章",
        "subtitle": "英国：银行业与帝国霸业",
        "start_page": 357,
        "end_page": 391,
        "filename": "currency-wars-book-2-chapter-02.md"
    },
    # 第3章
    {
        "title": "第三章",
        "subtitle": "法国：金融创新的革命",
        "start_page": 392,
        "end_page": 420,
        "filename": "currency-wars-book-2-chapter-03.md"
    },
    # 第4章
    {
        "title": "第四章",
        "subtitle": "美国：金权的圈里人",
        "start_page": 421,
        "end_page": 674,
        "filename": "currency-wars-book-2-chapter-04.md"
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

*(PDF页码范围: 第{chapter['start_page']}-{chapter['end_page']}页)*

---

{clean_content}
"""

    # 保存文件
    output_path = os.path.join(output_dir, chapter['filename'])
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    print(f"  已保存: {chapter['filename']} ({len(clean_content)} 字符)")

print("\n第二册所有章节提取完成！")
