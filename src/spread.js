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

const player = {
  name: "Warrior 1",
  planet: "Mars"
};

const augmentedPlayer = {
  ...player,
  level: 15,
  armor: "plastic"
}

logger.info(augmentedPlayer);

const ageFilter = (...ages) => {
  return (ages.filter(e => e > 50));
};

logger.info(ageFilter(108, 192, 56, 18, 33, 42));


[a, b,, c] = ["Bonnie", "Jason", "Alice", "Fred"];
logger.info(a);
logger.info(b);
logger.info(c);