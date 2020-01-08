const express = require('express');
const router = express.Router();
const db = require('./db.js');
const passport = require('passport');
module.exports = router;

router.post('/createP4', async function (req, res){
  console.log("p4 créé"+req.body.cols);
  await db.createP4(req.body);
  res.send('success');
});

router.post('/findP4', async function (req, res){
  var pseudo = req.body;
  const result = await db.P4.findOne(pseudo);
  console.log('result :',result);
  console.log('board :',result.board);
  res.send(result);
});
