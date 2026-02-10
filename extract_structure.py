import pypdf
import sys
import io
import re

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 搜索所有包含"第X章"的页面
chapters = []
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        # 查找所有"第X章"的模式
        matches = re.findall(r'第[一二三四五六七八九十百]+[章节]', text)
        if matches:
            for match in matches:
                chapters.append((i+1, match))
                # 打印该页的前500个字符
                print(f'\n===== 第 {i+1} 页: {match} =====')
                print(text[:800])
                print('...')
