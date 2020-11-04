var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/member/member.ejs',{member : 'member'});
});

module.exports = router;
