const db = require('../models/mongoose.model');
const userDb = db.user;

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide"
        });
        return;
    }
    const user = new userDb({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    user
        .save(user)
        .then(data => {
            send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de l'ajout en base de données"
            });
        });
}
