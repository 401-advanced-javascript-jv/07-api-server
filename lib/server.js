'use strict';

const express = require('express');
const Category = require('');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [
  {
    id: 1,
    name: "Canned Goods",
  }
];

// parse data for each request
app.use(express.json());

// log method and path for each request to server
app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

// get all categories
app.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results}); 
});

// get category of an id
app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

// add category to data
app.post('/categories', (req,res,next) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

// update category with passed in id
app.put('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let {name} = req.body;
  let recordObj = {name};
  let input = new Category(recordObj);

  if (input.valid) {
    for (let i = 0; i < db.length; i++) {
      if (db[i].id === parseInt(id)) {
        db[i].name = input.name;
        break;
      }
    }
  } else {
    // TODO: add error handler modules
    throw new Error('Bad Input!');
  }
});

app.delete('/categories/:id', (req,res,next) => {
});

module.exports = {
  server: app,
  start: (port) => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

