const { execSync } = require('child_process');

console.log('Building...');
try {
  execSync('npm run build', { cwd: './Site', stdio: 'inherit' });
  console.log('Build completed');
} catch (e) {
  console.error('Failed', e.message);
}
