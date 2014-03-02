BASE="public/templates/docs/ref";
PARTIALS=( "description" "curl" "nodejs" "ruby" );

FOLDER=$1
SUBFOLDER=$2

mkdir "$BASE/$FOLDER"
mkdir "$BASE/$FOLDER/$SUBFOLDER"

for partial in "${PARTIALS[@]}"
do
  touch "$BASE/$FOLDER/$SUBFOLDER/_$partial.html"
done
