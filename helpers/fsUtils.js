const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content

 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const deleteNoteFromFile = (url, id) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const notesDB = JSON.parse(data);
      const newDB = notesDB.filter(note => note.id !== id)
      writeToFile(url, newDB)
    }
  });
}

const writeToFile = (url, content) => {
  fs.writeFile(url, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to db.json`)
  );
}

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (url, content) => {
  console.log(content)
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile( url, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteNoteFromFile };
