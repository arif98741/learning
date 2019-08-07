var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I am user default page');
});

router.get('/detail', function(req, res, next) {
  res.send('details');
});

// localhost:8000/users/detail



module.exports = router;
