git checkout year/2021
touch build/.nojekyll
touch build/CNAME
echo "www.arvindsuresh.in" > build/CNAME
git add build/*
git commit -m "deploying production code"
git subtree split --prefix build -b master
git push -f origin master:master
git branch -D master