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
