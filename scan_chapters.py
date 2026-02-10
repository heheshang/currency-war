import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = '货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

print('=== 搜索目录和章节 ===')
print()

# 首先查找目录页
for i in range(min(500, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text and '目录' in text:
        print(f'===== 找到目录页: {i+1} =====')
        print(text[:1500])
        print()
