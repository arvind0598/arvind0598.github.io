git checkout 2019
touch dist/CNAME
echo "www.arvindsuresh.in" > dist/CNAME
git subtree split --prefix dist -b master
git push -f origin master:master
git branch -D master