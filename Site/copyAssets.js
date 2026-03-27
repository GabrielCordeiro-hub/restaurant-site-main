const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d';
const destDir = 'c:\\Portifólio\\Restaurant\\Site\\src\\assets';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { prefix: 'hero_restaurant_', destName: 'hero_bg.png' },
  { prefix: 'about_image_', destName: 'about_img.png' },
  { prefix: 'menu_salad_', destName: 'menu_1.png' },
  { prefix: 'menu_pasta_', destName: 'menu_2.png' },
  { prefix: 'menu_dessert_', destName: 'menu_3.png' }
];

const files = fs.readdirSync(srcDir);

filesToCopy.forEach(mapping => {
  const match = files.find(f => f.startsWith(mapping.prefix) && f.endsWith('.png'));
  if (match) {
    const srcPath = path.join(srcDir, match);
    const destPath = path.join(destDir, mapping.destName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${match} to ${mapping.destName}`);
  } else {
    console.log(`Could not find file for prefix ${mapping.prefix}`);
  }
});
