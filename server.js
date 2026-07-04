const { spawn } = require('child_process');

console.log('Starting Next.js app...');
spawn('npm', ['start'], {
  stdio: 'inherit',
  cwd: __dirname
});
