var express = require('express');
var router = express.Router();

const homeRouter = require('./main/home.js');
const postRouter = require('./post/post.js');
const memberRouter = require('./member/member.js');

router.use('/', homeRouter);
router.use('/post', postRouter);
router.use('/member', memberRouter);

module.exports = router;
