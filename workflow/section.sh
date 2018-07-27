#!

mkdir ./src/sections/$1
mkdir ./src/sections/$1/elements
touch ./src/sections/$1/index.js
touch ./src/sections/$1/$1.js
touch ./src/sections/$1/$1.scss

cat ./workflow/templates/index.js | sed -e 's/${COMPONENT}/'$1'/' | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/index.js
cat ./workflow/templates/component.js | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/$1.js
cat ./workflow/templates/style.scss | sed -e 's/${COMPONENT}/'$1'/' >> ./src/sections/$1/$1.scss