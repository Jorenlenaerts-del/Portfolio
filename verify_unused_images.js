const fs = require('fs');
const path = require('path');
const root = process.cwd();
const imageFiles = [];
const referenced = new Set();
const imageRegex = /\.(jpg|jpeg|png|webp|svg)$/i;
function walkFiles(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}
walkFiles(root, (fullPath) => {
  const rel = path.relative(root, fullPath).replace(/\\/g, '/');
  if (imageRegex.test(fullPath)) {
    imageFiles.push(rel);
    return;
  }
  const ext = path.extname(fullPath).toLowerCase();
  if (!['.html', '.js', '.css', '.toml', '.md', '.json'].includes(ext)) return;
  let text;
  try {
    text = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    return;
  }
  const re = /"([^"\n]+\.(?:jpg|jpeg|png|webp|svg))"|'([^'\n]+\.(?:jpg|jpeg|png|webp|svg))'/gi;
  let match;
  while ((match = re.exec(text))) {
    let img = (match[1] || match[2]).replace(/\\/g, '/');
    if (img.startsWith('./')) img = img.slice(2);
    if (img.startsWith('/')) img = img.slice(1);
    referenced.add(img);
  }
});
const unused = imageFiles.filter(img => !referenced.has(img)).sort();
console.log('TOTAL_IMAGES', imageFiles.length);
console.log('REFERENCED', referenced.size);
console.log('UNUSED', unused.length);
for (const u of unused) console.log(u);
