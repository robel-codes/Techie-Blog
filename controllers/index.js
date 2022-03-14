const router = require('express').Router();

router.use('/', require('./home-routes.js'));
router.use('/dashboard', require('./dashboard-routes.js'));
router.use('/api', require('./api/'));

module.exports = router;
