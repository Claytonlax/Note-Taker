const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content

 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (content) =>
  fs.writeFile('../db/db.json', JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to db.json`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content) => {
  fs.readFile('../db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile('../db/db.json', parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
