var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blog');
// locations
router.get('/blog', ctrlBlog.loadPosts);
router.post('/blog', ctrlBlog.addPost);
router.put('/blog/:postid', ctrlBlog.updatePost);
router.delte('/blog/:psotid', ctrlBlog.deletePost);

module.exports = router;