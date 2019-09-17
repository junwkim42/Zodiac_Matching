var db = require("../models");
const passport = require('passport');

module.exports = function(app) {

    app.post("/join", (req, res)=>{
        const {name, username, password, birthDate, gender} = req.body;
        let errors = [];

        if(!username || !password || !birthDate || !gender || !name){
            errors.push({ msg: "Please fill in all the fields"});
        }

        if (password.length < 6){
            errors.push({ msg: "Password should be at least 6 characters"});
        }

        if (errors.length > 0){
            res.send(errors[0])
        } else {
            db.User.findOne({ username: username})
            .then(user => {
                if(user){
                    errors.push({ msg: "User email already registered"});
                    res.send(errors[0]);
                }
                else{
                    var z = birthDate.split("-");
                    //month
                    var m = Number(z[1]);
                    //date
                    var d = Number(z[2]);
                    //assgin zodiac here
                    var zodiac;
                    //between jan 20 - feb 18
                    if((m === 1 && d >= 20) || (m === 2 && d < 19))
                    {
                        zodiac = "Aquarius";
                    }
                    // feb 19 - march 20
                    else if ((m === 2 && d >= 19) || (m === 3 && d < 21))
                    {
                        zodiac = "Pisces";
                    }
                    // march 21 - april 19
                    else if ((m === 3 && d >= 21) || (m === 4 && d < 20))
                    {
                        zodiac = "Aries";
                    }
                    // april 20 - may 20
                    else if ((m === 4 && d >= 20) || (m === 5 && d < 21))
                    {
                        zodiac = "Taurus";
                    }
                    // may 21 - june 20
                    else if ((m === 5 && d >= 21) || (m === 6 && d < 21))
                    {
                        zodiac = "Gemini";
                    }
                    // june 21 - july 22
                    else if ((m === 6 && d >= 21) || (m === 7 && d < 23))
                    {
                        zodiac = "Cancer";
                    }
                    // july 23 - aug 22
                    else if ((m === 7 && d >= 23) || (m === 8 && d < 23))
                    {
                        zodiac = "Leo";
                    }
                    // aug 23 - sept 22
                    else if ((m === 8 && d >= 23) || (m === 9 && d < 23))
                    {
                        zodiac = "Virgo";
                    }
                    // sept 23 - oct 22
                    else if ((m === 9 && d >= 23) || (m === 10 && d < 23))
                    {
                        zodiac = "Libra";
                    }
                    // oct 23 - nov 21
                    else if ((m === 10 && d >= 23) || (m === 11 && d < 22))
                    {
                        zodiac = "Scorpio";
                    }
                    // nov 22 - dec 21
                    else if ((m === 11 && d >= 22) || (m === 12 && d < 22))
                    {
                        zodiac = "Sagittarius";
                    }
                    else {
                        zodiac = "Capricorn";
                    }

                    const newUser = new db.User({
                        name: name,
                        username: username,
                        password: password,
                        birthDate: birthDate,
                        gender: gender,
                        zodiac: zodiac
                    });
                    newUser.save()
                    .then(user=>{
                        res.send({msg: "success"});
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