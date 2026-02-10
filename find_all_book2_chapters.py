import pypdf
import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = r'd:/soft/workspace/ai/currency-war/货币战争[1~5] by 宋鸿兵 [宋鸿兵].pdf'
reader = pypdf.PdfReader(pdf_path)

print("=" * 80)
print("搜索第二册所有章节标题（第278-680页）")
print("=" * 80)

chapters = []

# 搜索范围内的每一页
for i in range(277, min(680, len(reader.pages))):
    page = reader.pages[i]
    text = page.extract_text()
    if text:
        # 检查是否有"第X章"标题
        for line in text.split('\n')[:30]:
            line = line.strip()
            # 匹配中文数字章节
            match = re.match(r'^(第[一二三四五六七八九十]+章)[：:：\s]*([^\n]{0,35})', line)
            if match:
                chapter_num = match.group(1)
                chapter_title = match.group(2).strip()
                # 如果标题太长，检查是否包含章节号
                if len(chapter_title) > 30 or 'see more' in chapter_title:
                    # 查看下一行
                    continue
                chapters.append((i+1, chapter_num, chapter_title))

# 去重并打印
seen = set()
for page, num, title in chapters:
    key = f"{num}:{title[:20]}"
    if key not in seen:
        seen.add(key)
        print(f"第 {page:4d} 页: {num} {title}")

# 现在找出"本章导读"对应的章节
print("\n" + "=" * 80)
print("根据'本章导读'位置推算的章节")
print("=" * 80)

guide_pages = [357, 392, 457, 495, 540, 572, 618, 646]
for gp in guide_pages:
    # 向前搜索章节标题
    for offset in range(1, 50):
        check_page = gp - offset
        if check_page < 277:
            break
        page = reader.pages[check_page - 1]
        text = page.extract_text()
        if text:
            for line in text.split('\n')[:20]:
                line = line.strip()
                match = re.match(r'^(第[一二三四五六七八九十]+章)[：:：\s]*([^\n]{0,35})', line)
                if match:
                    print(f"本章导读在第{gp}页 -> 对应章节在第{check_page}页: {match.group(1)} {match.group(2).strip()}")
                    break
            else:
                continue
            break
