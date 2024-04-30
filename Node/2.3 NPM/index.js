var generateName = require("sillyname");
var superheroes = require('superheroes');
var sillyName = generateName();
var superheroName = superheroes.random();

console.log(`My name is ${sillyName}... and I. Am. ${superheroName}.`);

