var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('i am  from test default page');
});
router.get('/abc', function(req, res, next) {
  res.send('i am  from abc');
});
router.get('/def', function(req, res, next) {
  res.send('i am  from def');
});

module.exports = router;
