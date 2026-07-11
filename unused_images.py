import os
import re
root = os.getcwd()
files = []
for dirpath, dirnames, filenames in os.walk(root):
    for fn in filenames:
        if fn.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.svg')):
            files.append(os.path.relpath(os.path.join(dirpath, fn), root).replace('\\', '/'))
used = set()
regex = re.compile(r'"([^"\n]+\.(?:jpg|jpeg|png|webp|svg))"|\'([^\'\n]+\.(?:jpg|jpeg|png|webp|svg))\'', re.IGNORECASE)
for path in ['Index.html', 'main.js', 'Style.css', 'netlify.toml']:
    if os.path.exists(path):
        text = open(path, encoding='utf8').read()
        for m in regex.findall(text):
            for g in m:
                if g:
                    used.add(g.replace('\\', '/'))
unused = sorted([f for f in files if f not in used])
print('TOTAL', len(files))
print('USED', len(used))
print('UNUSED', len(unused))
for u in unused:
    print(u)
