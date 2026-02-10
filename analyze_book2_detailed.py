import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

print("=" * 80)
print("第二册详细分析（约278-680页）")
print("=" * 80)

# 搜索第二册范围
book2_start = 277
book2_end = 680

chapters = []
for i in range(book2_start - 1, min(book2_end, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        # 查找章节标题
        for pattern in [r'第[一二三四五六七八九十]+章[：:：\s]*(.{0,30})', 
                        r'第[0-9]+章[：:：\s]*(.{0,30})']:
            matches = re.finditer(pattern, text)
            for match in matches:
                full = match.group(0)
                title = match.group(1) if len(match.groups()) > 1 else ""
                # 只保留较短的标题行
                if len(full) < 60:
                    chapters.append((i+1, full.strip()))

# 同时搜索"本章导读"
guide_pages = []
for i in range(book2_start - 1, min(book2_end, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text and '本章导读' in text:
        # 获取前面的标题
        lines = text.split('\n')
        title = ""
        for line in lines[:20]:
            if re.search(r'第[一二三四五六七八九十]+章', line):
                title = line.strip()
                break
        guide_pages.append((i+1, title))

print("\n【第二册：章节标题】")
print("=" * 80)
for page, title in chapters:
    print(f"第 {page:4d} 页: {title}")

print("\n【第二册：本章导读位置（章节开始）】")
print("=" * 80)
for page, title in guide_pages:
    print(f"第 {page:4d} 页: {title}")
