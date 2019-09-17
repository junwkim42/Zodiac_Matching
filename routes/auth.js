var db = require("../models");
const passport = require('passport');

module.exports = function(app) {

    app.post("/join", (req, res)=>{
        const {username, password, birthDate} = req.body;
        let errors = [];

        if(!username || !password || !birthDate){
            errors.push({ msg: "Please fill in all fields"});
        }

        if (password.length < 6){
            errors.push({ msg: "Password should be at least 6 characters"});
        }

        if (errors.length > 0){
            res.send(errors[0].msg)
        } else {
            db.User.findOne({ username: username})
            .then(user => {
                if(user){
                    errors.push({ msg: "Username already registered"});
                    res.send(errors[0].msg);
                }
                else{
                    const newUser = new db.User({
                        username: username,
                        password: password,
                        birthDate: birthDate
                    });
                    newUser.save()
                    .then(user=>{
                        res.send("/login");
                    })
                    .catch(err=>console.log(err));
                }
            })
        }
    });

    app.post('/login', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/profile',
            failureMessage: '/login'
        })(req, res, next);
    });

    app.get('/logout', (req, res) =>{
        req.logout();
    })
}