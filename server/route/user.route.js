module.exports = app => {
    const user = require('../controller/User.controller');
    const router = require('express').Router();

    app.use('/api', router)
    router.post('/user', user.create);
}
