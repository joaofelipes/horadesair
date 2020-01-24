git add *
git commit -m "Build number $(get-date -f ddMMyyyy-HHmm)"
git push origin master
