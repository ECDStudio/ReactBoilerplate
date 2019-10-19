#!

mkdir ./src/sections/$1
mkdir ./src/sections/$1/elements
touch ./src/sections/$1/index.js
touch ./src/sections/$1/$1.js
touch ./src/sections/$1/$1.scss

cat ./scripts/templates/index.js | sed -e 's/${COMPONENT}/'$1'/' | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/index.js
cat ./scripts/templates/section.js | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/$1.js
cat ./scripts/templates/style.scss | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/$1.scss