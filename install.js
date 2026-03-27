const { execSync } = require('child_process');

console.log('Running npm install in Site...');
try {
  execSync('npm install', { cwd: './Site', stdio: 'inherit' });
  console.log('Installation completed');
} catch (e) {
  console.error('Failed', e.message);
}
