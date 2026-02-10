import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 关键页面列表
key_pages = [317, 357, 392, 421, 457, 495, 540, 572, 618, 646, 680]

print("=" * 80)
print("第二册关键页面分析")
print("=" * 80)

for page_num in key_pages:
    if page_num > len(reader.pages):
        break
    page = reader.pages[page_num - 1]
    text = page.extract_text()
    
    print(f"\n{'='*60}")
    print(f"第 {page_num} 页")
    print(f"{'='*60}")
    
    # 显示前1000个字符
    if text:
        lines = text.split('\n')
        for i, line in enumerate(lines[:50]):
            line = line.strip()
            if line:
                print(f"{i+1:2d}: {line}")
    else:
        print("(无文本内容)")
