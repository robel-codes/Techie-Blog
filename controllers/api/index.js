const router = require('express').Router();


router.use('/users', require('./user-routes.js'));
router.use('/posts', require('./post-routes'));
router.use('/comments', require('./comment-routes'));

module.exports = router;
