import pypdf
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)
print(f'总页数: {len(reader.pages)}')
print(f'PDF信息: {reader.metadata}')

# 搜索目录页
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    if text and '目录' in text and ('章' in text or '第一章' in text or 'Chapter' in text):
        print(f'\n===== 目录页 {i+1} =====')
        print(text)
        if i > 200:  # 限制搜索范围
            break
