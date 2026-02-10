import pypdf
import sys
import io
import re

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 收集所有章节信息
chapters = []

# 搜索前300页中的章节（第一册应该在这个范围内）
for i in range(min(350, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        # 查找"第X章"的模式
        matches = re.finditer(r'第([一二三四五六七八九十百]+)[章節节]', text)
        for match in matches:
            chapter_title = match.group(0)
            chapters.append((i+1, chapter_title))

# 去重并排序
seen = set()
unique_chapters = []
for page, title in chapters:
    if title not in seen:
        seen.add(title)
        unique_chapters.append((page, title))

# 打印所有章节
print("找到的章节：")
print("=" * 60)
for page, title in unique_chapters:
    print(f"第 {page:4d} 页: {title}")
