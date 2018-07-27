#!

mkdir ./src/sections/$2/elements/$1
touch ./src/sections/$2/elements/$1/index.js
touch ./src/sections/$2/elements/$1/$1.js
touch ./src/sections/$2/elements/$1/$1.scss

cat ./workflow/templates/index.js | sed -e 's/${COMPONENT}/'$1'/' | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/index.js
cat ./workflow/templates/component.js | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/$1.js
cat ./workflow/templates/element.scss | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/$1.scss