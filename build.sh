#!/bin/bash -ex

mkdir -p assets/dist
./node_modules/.bin/sass style.scss assets/dist/style.css
