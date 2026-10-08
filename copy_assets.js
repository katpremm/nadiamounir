const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outDir = path.join(rootDir, 'Fotos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const supported = new Set(['.jpg', '.jpeg', '.png', '.webp']);
for (const file of fs.readdirSync(rootDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!supported.has(ext)) continue;

  const source = path.join(rootDir, file);
  const target = path.join(outDir, file);

  if (source === target) continue;
  if (!fs.existsSync(target)) {
    fs.copyFileSync(source, target);
    console.log('Copied ' + file + ' -> ' + target);
  }
}

console.log('Asset directory synced.');
