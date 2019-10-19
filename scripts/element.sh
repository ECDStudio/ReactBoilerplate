#!

mkdir ./src/sections/$2/elements/$1
touch ./src/sections/$2/elements/$1/index.js
touch ./src/sections/$2/elements/$1/$1.js
touch ./src/sections/$2/elements/$1/$1.scss

cat ./scripts/templates/index.js | sed -e 's/${COMPONENT}/'$1'/' | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/index.js
cat ./scripts/templates/component.js | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/$1.js
cat ./scripts/templates/element.scss | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$2/elements/$1/$1.scss