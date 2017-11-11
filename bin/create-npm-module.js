#!/usr/bin/env node
var args = process.argv.splice(process.execArgv.length + 2);
var myLibrary = require('../lib/index.js');

// Displays the text in the console
myLibrary.say(process.cwd());