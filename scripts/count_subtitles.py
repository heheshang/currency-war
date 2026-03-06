import re

def count_subtitles(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 找到所有场景导出
    # 格式: export const xxxSubs: SubtitleEntry[] = [
    pattern = r'export const (\w+Subs|\w+Scene):\s*SubtitleEntry\[\]\s*=\s*\['
    
    results = []
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        match = re.match(pattern, line)
        if match:
            scene_name = match.group(1)
            # 从这里开始数 { startFrame 直到找到匹配的 ]
            bracket_count = 0
            obj_count = 0
            j = i
            started = False
            
            while j < len(lines):
                if '[' in lines[j]:
                    started = True
                    bracket_count += lines[j].count('[')
                if started:
                    bracket_count -= lines[j].count(']')
                    if '{' in lines[j] and 'startFrame' in lines[j]:
                        obj_count += 1
                    if bracket_count == 0:
                        break
                j += 1
            
            results.append((scene_name, obj_count))
    
    return results

print("=== Episode 07 ===")
for name, count in count_subtitles('src/subtitles/episode07.ts'):
    print(f"  {name}: {count}")

print("\n=== Episode 10 ===")
for name, count in count_subtitles('src/subtitles/episode10.ts'):
    print(f"  {name}: {count}")

print("\n=== Episode 11 ===")
for name, count in count_subtitles('src/subtitles/episode11.ts'):
    print(f"  {name}: {count}")
