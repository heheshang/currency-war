import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

print("=" * 80)
print("扫描全书章节结构")
print("=" * 80)

chapters = []
toc_pages = []

# 搜索全书，找所有章节和目录
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        # 检测目录页
        if '目录' in text and ('章' in text or 'Chapter' in text):
            toc_pages.append((i+1, text[:500]))
        
        # 检测章节标题
        lines = text.split('\n')
        for line_idx, line in enumerate(lines):
            line = line.strip()
            # 匹配"第X章"或"Chapter X"或"第x章"
            if re.match(r'^第[一二三四五六七八九十百]+[章節]', line) or \
               re.match(r'^Chapter\s+[0-9]+', line, re.I) or \
               re.match(r'^第[0-9]+[章章節]', line):
                # 获取下一行作为副标题
                subtitle = ""
                if line_idx + 1 < len(lines):
                    next_line = lines[line_idx + 1].strip()
                    if next_line and not re.match(r'^第', next_line) and len(next_line) < 50:
                        subtitle = next_line
                chapters.append((i+1, line, subtitle))

# 输出目录页
print("\n" + "=" * 80)
print("【目录页】")
print("=" * 80)
for page_num, content in toc_pages[:10]:
    print(f"\n--- 第 {page_num} 页 ---")
    print(content[:300])

# 输出章节
print("\n" + "=" * 80)
print("【所有章节】")
print("=" * 80)
for page, title, subtitle in chapters:
    print(f"第 {page:4d} 页: {title} | {subtitle}")
