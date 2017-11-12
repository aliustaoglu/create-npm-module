#!/usr/bin/env node

var myLibrary = require('../lib/index.js');
var args = process.argv.splice(process.execArgv.length + 2);
if (args.length !== 1) {
  console.log('Wrong arguments. Please enter package name');
  return -1;
}

myLibrary.createModule(args[0]);
