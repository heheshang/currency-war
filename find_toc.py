import pypdf
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 读取第20-80页，寻找目录
for i in range(19, min(80, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text and len(text) > 100:
        print(f'\n===== 第 {i+1} 页 =====')
        print(text[:1000])
