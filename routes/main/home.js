var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/main/home.ejs',{home : 'home'});
});

module.exports = router;
