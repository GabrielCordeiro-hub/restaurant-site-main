const { execSync } = require('child_process');
console.log('Starting npm install...');
try {
  execSync('npm.cmd install', { cwd: './Site', stdio: 'inherit' });
  console.log('Finished install');
} catch (e) {
  console.error('Failed', e.message);
}
