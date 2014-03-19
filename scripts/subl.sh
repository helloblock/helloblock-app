DIR="public/templates/docs/ref"
FOLDERS=$(ls $DIR)
HTML="
<br><br><br><br><br>\n
<div class='h5 title'>EXAMPLE REQUEST</div>\n
\t<pre class='ruby'>\n
\t\t<code hljs>\n
HelloBlock::Address.where(address: ['1DQN9nop...', ...]).to_hash\n
\t\t</code>\n
\t</pre>\n
</div>"


for FOLDER in $FOLDERS
do
  SUBFOLDERS=$(ls "$DIR/$FOLDER")


  for SUBFOLDER in $SUBFOLDERS
  do
    # echo $HTML >> "$DIR/$FOLDER/$SUBFOLDER/_$1.html"
    # subl "$DIR/$FOLDER/$SUBFOLDER/_$1.html"

  done
done
