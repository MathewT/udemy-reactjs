const logger = require('json-log').log;
'use strict'

let title = 'The Unknown God';
let author = 'Carabine';

const printBook = (title, author) => {
  const date = "8/1/2020";
  logger.info(`Title is ${title}. Author is ${author}`);
  logger.info(date);
};

printBook(title, author);