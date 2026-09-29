const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Desktop\\Webseite Nadia Mounir';
const destDir = 'C:\\Users\\Desktop\\Webseite Nadia Mounir\\Fotos';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

const mapping = {
  'dental_hero': 'check-in.jpg',
  'dentist_portrait': 'tooth_logo.jpg',
  'treatment_room': 'clinic.jpg',
  'waiting_lounge': 'waitingroom.jpg'
};

files.forEach(file => {
  for (const [key, targetName] of Object.entries(mapping)) {
    if (file.startsWith(key) && file.endsWith('.png')) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, targetName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} -> ${destPath}`);
    }
  }
});
