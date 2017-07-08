#!/usr/bin/env node

const comma = require('..');

const number = 5671;
const commaN = "131,982,349,000";

console.log(`Normal: ${number} => ${comma.add(number)}`);
console.log(`w/Comma: ${commaN} => ${comma.remove(commaN)}`);
console.log(`Replacement: ${commaN} => ${comma.replace(commaN)}`);
