set -e

npm run build

cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:IEEE-Student-Branch-NSBM/IEEENSBM.git master:gh-pages

cd -