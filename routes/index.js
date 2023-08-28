const express = require('express');

const notesRouter = require('./notes');
const htmlRouter = require('./htmlRoutes');

const app = express();

app.use('/api', notesRouter);
app.use('/', htmlRouter);

module.exports = app;