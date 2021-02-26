let random = require('unique-random-array');
let starWarsNames = require('./starwars-names.json');

module.exports = {
  all: starWarsNames,
  random: random(starWarsNames)
};