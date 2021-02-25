const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('../auth');

router.get('/user', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (!user) {
            return res.sendStatus(401);
        }

        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

router.put('/user', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (!user) {
            return res.sendStatus(401);
        }

        if (typeof req.body.username !== 'undefined') {
            user.username = req.body.username;
        }
        if (typeof req.body.email !== 'undefined') {
            user.email = req.body.email;
        }
        if (typeof req.body.password !== 'undefined') {
            user.setPassword(req.body.password);
        }

        return user.save().then(function () {
            return res.json({user: user.toAuthJSON()});
        });
    }).catch(next);
});

router.post('/user/login', function (req, res, next) {
    if (!req.body.user.email) {
        return res.status(422).json({errors: {email: "can't be blank"}});
    }

    if (!req.body.user.password) {
        return res.status(422).json({errors: {password: "can't be blank"}});
    }

    passport.authenticate('local', {session: false}, function (err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            user.token = user.generateJWT();
            return res.json({user: user.toAuthJSON()});
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
});

router.post('/user/register', function (req, res, next) {
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.birthDate = req.body.birthDate;
    user.roles = ['USER_LOGGED'];
    user.phoneNumber = req.body.phoneNumber;
    user.setPassword(req.body.password);

    user.save().then(function () {
        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

module.exports = router;
