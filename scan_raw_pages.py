import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 关键页面附近：第357页附近（第二章）、第392页附近（第三章）
target_ranges = [
    (355, 360, "第二章附近"),
    (390, 395, "第三章附近"),
    (455, 460, "第五章附近"),
    (493, 498, "第六章附近"),
    (538, 543, "第七章附近"),
    (570, 575, "第八章附近"),
    (616, 621, "第九章附近"),
    (644, 649, "第十章附近"),
]

for start, end, desc in target_ranges:
    print(f"\n{'='*70}")
    print(f"{desc} (第{start}-{end}页)")
    print(f"{'='*70}")
    
    for page_num in range(start, end+1):
        if page_num > len(reader.pages):
            break
        page = reader.pages[page_num - 1]
        text = page.extract_text()
        
        # 查找包含"第X章"的行
        if text:
            lines = text.split('\n')
            for i, line in enumerate(lines[:30]):
                line_clean = line.strip()
                # 检查是否是章节标题
                if re.search(r'第[二三四五六七八九十]+章', line_clean):
                    print(f"第{page_num}页第{i+1}行: {line_clean}")
                    # 打印前后几行作为上下文
                    for j in range(max(0, i-2), min(len(lines), i+5)):
                        print(f"  {j+1}: {lines[j].strip()}")
                    print()
                    break
