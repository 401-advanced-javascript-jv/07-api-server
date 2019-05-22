'use strict';

const express = require('express');

const app = express();
const router = express.Router();

let db = [];

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

router.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

router.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


router.post('/categories', (req,res,next) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

router.put('/categories/:id', (req,res,next) => {

});

router.delete('/categories/:id', (req,res,next) => {
  let id = parseInt(req.params.id);
  for (let data of db) {
    if (data.id === id) {
      let del = db.indexOf(data);
      db.splice(del, 1);
    }
  }
  res.end();
});

app.use('/api/v1', router);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

