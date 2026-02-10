import pypdf
import sys
import io
import re

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 收集所有可能的章节标题
chapters = []
sections = []

# 搜索前400页中的章节和节
for i in range(min(400, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        lines = text.split('\n')
        for line in lines:
            line = line.strip()
            # 检测章节标题（如：第一章 xxx）
            if re.match(r'^第[一二三四五六七八九十百]+[章節节]', line):
                chapters.append((i+1, line))
            # 检测节标题（如：第X节 xxx）
            elif re.match(r'^第[0-9]+[节節]', line):
                sections.append((i+1, line))

# 打印所有找到的章节
print("=" * 80)
print("【章】")
print("=" * 80)
for page, title in chapters:
    print(f"第 {page:4d} 页: {title}")

print("\n" + "=" * 80)
print("【节】")
print("=" * 80)
for page, title in sections[:20]:  # 只显示前20个
    print(f"第 {page:4d} 页: {title}")
