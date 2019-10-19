#!

mkdir ./src/components/$1
touch ./src/components/$1/index.js
touch ./src/components/$1/$1.js
touch ./src/components/$1/$1.scss

cat ./scripts/templates/index.js | sed -e 's/${COMPONENT}/'$1'/' | sed -e 's/${COMPONENT}/'$1'/' >> ./src/components/$1/index.js
cat ./scripts/templates/component.js | sed -e 's/${COMPONENT}/'$1'/' >> ./src/components/$1/$1.js
cat ./scripts/templates/style.scss | sed -e 's/${COMPONENT}/'$1'/' >> ./src/components/$1/$1.scss