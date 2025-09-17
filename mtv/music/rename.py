import os
import re

# 获取当前目录下所有文件
for filename in os.listdir('.'):
    # 匹配“作者 - 歌名.mp3”格式
    match = re.match(r'^(.+?) - (.+?)\.mp3$', filename)
    if match:
        author, song = match.groups()
        new_name = f"{song} - {author}.mp3"
        # 避免重名覆盖
        if not os.path.exists(new_name):
            os.rename(filename, new_name)
            print(f'Renamed: {filename} -> {new_name}')
        else:
            print(f'Skip (exists): {new_name}')