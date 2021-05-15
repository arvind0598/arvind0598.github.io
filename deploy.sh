git checkout year/2021
touch build/CNAME
echo "www.arvindsuresh.in" > build/CNAME
git subtree split --prefix dist -b master
git push -f origin master:master
git branch -D master