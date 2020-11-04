var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/post/post.ejs',{post : 'post'});
});

module.exports = router;
