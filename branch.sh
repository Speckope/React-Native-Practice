echo Pass branch name:
read BRANCH
echo $BRANCH
echo Pass the message:
read MESSAGE
echo $MESSAGE

git add .
git commit -m "$MESSAGE"
git push
git branch $BRANCH
git checkout $BRANCH
git push -u origin $BRANCH
git checkout master