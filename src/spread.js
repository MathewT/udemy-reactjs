const logger = require('json-log').log;
'use strict'

const myArray = [42, 56, 18];

let newArray = [...myArray, 108, 192];

logger.info(`newArray is ${newArray}`);

const people = [{
  name: "Adam",
  age: 15
}, {
  name: "Kirby",
  age: 9
}, {
  name: "Sunil",
  age: 52
}, {
  name: "Zoe",
  age: 39
}];

let morePeople = [...people, {
  name: "Mina",
  age: 37
}, {
  name: "Bob",
  age: 57
}];

logger.info(people);
logger.info(morePeople);