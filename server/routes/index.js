const router = require('express').Router();

router.use('/api', require('./api/users'));

module.exports = router;
