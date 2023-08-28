const app = require('express').Router();
const {readFromFile, readAndAppend} = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')

app.get('/notes', (req,res)=> {
console.log('in get /api/notes')
 readFromFile('../../../../../../Users/clayt/bootcamp/WORKING/Note-Taker/db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/notes', (req,res)=>{
    console.log('in post /api/notes')

    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });



module.exports = app