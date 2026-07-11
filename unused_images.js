const fs = require('fs');
const path = require('path');
const root = process.cwd();
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(entry.name)) {
      files.push(path.relative(root, p).replace(/\\/g, '/'));
    }
  }
}
walk(root);
const used = new Set();
const regex = /"([^"\n]+\.(?:jpg|jpeg|png|webp|svg))"|'([^'\n]+\.(?:jpg|jpeg|png|webp|svg))'/gi;
for (const p of ['Index.html', 'main.js', 'Style.css', 'netlify.toml']) {
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    let m;
    while ((m = regex.exec(text))) {
      let match = (m[1] || m[2]).replace(/\\/g, '/');
      if (match.startsWith('./')) match = match.slice(2);
      if (match.startsWith('/')) match = match.slice(1);
      used.add(match);
    }
  }
}
const unused = files.filter(f => !used.has(f)).sort();
console.log('TOTAL', files.length);
console.log('USED', used.size);
console.log('UNUSED', unused.length);
for (const u of unused) console.log(u);
