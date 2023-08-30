const app = require('express').Router();
const {readFromFile, readAndAppend, deleteNoteFromFile} = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')
const path = require("path");

const notesPath = 'db/db.json'

app.get('/notes', (req,res)=> {
console.log('in get /api/notes')
readFromFile(notesPath).then((data) => res.json(JSON.parse(data)));
});

app.post('/notes', (req,res)=>{
    console.log('in post /api/notes')

    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(notesPath, newNote);
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

  app.delete('/notes/:id', (req, res) => {
    console.log('in get /api/notes/:id')
    deleteNoteFromFile(notesPath, req.params.id)
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  })



module.exports = app