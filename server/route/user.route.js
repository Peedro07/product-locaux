module.exports = app => {
    const user = require('../controller/User.controller');
    const router = require('express').Router();

    router.post('/user', user.create);
    app.use('/api', router)
}
