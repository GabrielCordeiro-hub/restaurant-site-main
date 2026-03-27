const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'Site', 'src', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mappings = {
  'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d\\hero_restaurant_1773704011756.png': 'hero_bg.png',
  'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d\\about_image_1773704039712.png': 'about_img.png',
  'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d\\menu_salad_1773704105483.png': 'menu_1.png',
  'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d\\menu_pasta_1773704137088.png': 'menu_2.png',
  'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\07e0f904-4b01-4396-b228-3d2ad88d9b9d\\menu_dessert_1773704161953.png': 'menu_3.png'
};

for (const [src, destName] of Object.entries(mappings)) {
  try {
    fs.copyFileSync(src, path.join(destDir, destName));
    console.log(`Copied ${destName}`);
  } catch (err) {
    console.error(`Error copying ${destName}`, err.message);
  }
}
