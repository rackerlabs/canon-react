#!/bin/bash

rm -rf dist
mkdir dist
npm run build
rm canon-react.js
mv canon-react.min.js ./dist
rm -rf test-built
rm test_bundle.js
