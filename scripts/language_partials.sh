DIR="public/templates/docs/ref"
FOLDERS=$(ls $DIR)

for FOLDER in $FOLDERS
do
  SUBFOLDERS=$(ls "$DIR/$FOLDER")


  for SUBFOLDER in $SUBFOLDERS
  do
    rm "$DIR/$FOLDER/$SUBFOLDER/_$1.html"
  done
done
