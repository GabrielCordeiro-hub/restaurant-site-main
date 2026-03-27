git config user.email "gabrielcordeiro@example.com"
git config user.name "Gabriel Cordeiro"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote remove origin
git remote add origin https://github.com/GabrielCordeiro-hub/restaurant-site-main
git push -u origin main -f
