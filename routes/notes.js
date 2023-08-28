const app = require('express').Router();
const allNotes = require("../db/db.json")
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils')

app.get('/notes', (req,res)=> {
console.log('in get /api/notes')
});

app.post('/notes', (req,res)=>{
    console.log('in post /api/notes')

});


module.exports = app