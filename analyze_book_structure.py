import pypdf
import sys
import io

# 设置输出编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 逐页分析，找出标题行（短行、大字可能是标题）
for i in range(min(100, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        lines = text.split('\n')
        short_lines = []
        for line in lines:
            line = line.strip()
            # 找出可能的标题行（短于50字且非空）
            if line and len(line) < 50 and len(line) > 2:
                short_lines.append(line)

        if short_lines:
            print(f'\n===== 第 {i+1} 页可能的标题 =====')
            for line in short_lines[:10]:  # 每页最多显示10行
                print(f'  {line}')
