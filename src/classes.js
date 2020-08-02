const logger = require('json-log').log;
'use strict'

class Human {
  constructor() {
    this.gender;
  }

  printGender() {
    logger.info(`gender is ${this.gender}`);
  }
}


class Person extends Human {
  constructor() {
    super();
    this.name = "Bob";
  }

  pringName() {
    logger.info(`name is ${this.name}`);
  }
}

class Animal {
  constructor() {
    logger.info(`Animal super() called.`);
  }
  gender;   
}

class Dog extends Animal {
  // constructor() {
  //   super();
  //   logger.info(`Dog constructor() called`);
  // }
  
  printGender = () => {
    logger.info(`Dog gender is ${this.gender}`);
  };
}

const myPerson = new Person();

myPerson.gender = "femme";

const myDog = new Dog();
myDog.gender = "girl";

myDog.printGender();

