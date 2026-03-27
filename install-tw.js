const fs = require('fs');
const { execSync } = require('child_process');

console.log('Installing Tailwind and its peer dependencies...');
try {
  execSync('npm install -D tailwindcss postcss autoprefixer', { cwd: './Site', stdio: 'inherit' });
  execSync('npx tailwindcss init -p', { cwd: './Site', stdio: 'inherit' });
  console.log('Tailwind installed and initialized');
} catch (e) {
  console.error('Failed', e.message);
}
