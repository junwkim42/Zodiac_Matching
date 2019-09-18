var db = require("../models");
const express = require('express');
const app = express();

module.exports = function(app){
    app.get('/users/:username', (req, res) => {
        db.User.findOne({username: req.params.username})
        .then(user => res.json({
            name: user.name,
            username: user.username,
            birthDate: user.birthDate,
            gender: user.gender,
            zodiac: user.zodiac,
            zodiacPic: user.zodiacPic,
            image: user.image
        }))
        .catch(err => res.status(422).json(err));
    });
}