const { execSync } = require('child_process');
console.log('Installing deps at root...');
try {
  execSync('npm.cmd install', { stdio: 'inherit' });
  console.log('Installed successfully. Building...');
  execSync('npm.cmd run build', { stdio: 'inherit' });
  console.log('Build completed!');
} catch (e) {
  console.error('Error during execution:', e.message);
  process.exit(1);
}
