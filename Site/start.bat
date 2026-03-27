echo "Starting install"
call npm.cmd install --no-fund --no-audit
echo "Install finished"
call npm.cmd run dev
