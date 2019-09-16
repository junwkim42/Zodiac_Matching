const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/user")

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField: 'username'}, (username, password, done) => {
            User.findOne({username: username})
            .then(user =>{
                if(!user){
                    return done(null, false, {message: "That username is not registered"});
                }

                if(password === user.password) {
                    return done(null, user);
                }
                else{
                    return done(null, false, {message: "Password incorrect"});
                }
            })
            .catch(err => console.log(err))
        })
    );

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user) {
            done(err, user);
        });
    })
}