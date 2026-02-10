import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

# 查看"本章导读"之前2-3页的内容，推断章节标题
guide_pages = [357, 392, 457, 495, 540, 572, 618, 646]

for gp in guide_pages:
    print(f"\n{'='*70}")
    print(f"查找第{gp}页'本章导读'对应的章节标题")
    print(f"{'='*70}")
    
    # 检查前面几页
    for offset in range(1, 10):
        check_page = gp - offset
        if check_page < 277:
            break
        page = reader.pages[check_page - 1]
        text = page.extract_text()
        if text:
            # 打印前50行内容
            lines = text.split('\n')[:50]
            has_chapter = False
            for i, line in enumerate(lines[:40]):
                line_clean = line.strip()
                if re.search(r'第[二三四五六七八九十]+章', line_clean) or \
                   re.search(r'Chapter\s+[0-9]+', line_clean, re.I):
                    print(f"\n第{check_page}页:")
                    for j in range(max(0, i-2), min(len(lines), i+8)):
                        print(f"  {j+1}: {lines[j]}")
                    has_chapter = True
                    break
            
            if has_chapter:
                break

# 根据现有信息推断章节结构
print(f"\n{'='*70}")
print("第二册（金权天下）章节结构推断")
print(f"{'='*70}")
print("""
根据分析，第二册包含以下章节：

第317页开始：第一章 - 德国：国际银行家的发源地
第357页开始：第二章 - 英国：银行业与帝国霸业（推断）
第392页开始：第三章 - 法国：金融创新的革命（推断）
第421页开始：第四章 - 美国：金权的"圈里人"
第457页开始：第五章 - ？（关于德国悲剧）
第495页开始：第六章 - ？（关于纳粹德国经济）
第540页开始：第七章 - ？（关于金融与情报）
第572页开始：第八章 - ？（关于基金会与世界政府）
第618页开始：第九章 - ？（关于2008金融海啸）
第646页开始：第十章 - ？（关于世界统一货币）
""")
