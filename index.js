#!/usr/bin/env node

const ColorThief = require('colorthief');
const path = require('path');

const img = process.argv[2] || path.resolve(process.cwd(), 'input.png');

ColorThief.getColor(img)
   .then(color => color.map(val => val.toString(16)).join(''))
   .then(color => { console.log(color) })
   .catch(err => { console.log(err) });
