var db = require("../models");
const fs = require('fs');
const passport = require('passport');



const express = require('express');
const app = express();
const router = express.Router();

// middlewarew
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');

router.get('/', async function (req, res) {
  await res.render('index');
});
module.exports = router;


module.exports = function(app) {

    app.post("/join", upload.single('file'), async (req, res)=>{
        const {name, username, password, birthDate, gender, file} = req.body;
        console.log(`[api::join] name:${name} username:${username} password:${password} birthDate:${birthDate} gender:${gender} file:${file}`, req.body);

        let errors = [];

        if(!name || !username || !password || !birthDate || !gender ){
            errors.push({ msg: "Please fill in all fields"});
        }

        if (password.length < 6){
            errors.push({ msg: "Password should be at least 6 characters"});           
        }

        
        // await picture upload to complete THEN 
        // post to database
        const imagePath = __dirname+'/../client/public/images';
        if (!fs.existsSync(imagePath)){
            fs.mkdirSync(imagePath);
        }
        const fileUpload = new Resize(imagePath);
        if (!req.file) {
            errors.push({ msg: "Please provide an image"});           
        }
        const filename = await fileUpload.save(req.file.buffer);
        // we should now have a filename for the uploaded file.
        // post this with the other data to databse.
        console.log( `>>>>>> filename: ${filename}` );
        
        if (!errors.length > 0){
            console.log( `* no errors, proceeding to see if unique username` );
            db.User.findOne({ username: username})
            .then(user => {
                if(user){
                    console.log( `x sorry user already exists, can't write a new user!` );
                    errors.push({ msg: "Username already registered"});
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

                    const userData = {
                        name: name,
                        username: username,
                        password: password,
                        birthDate: birthDate,
                        gender: gender,
                        zodiac: zodiac,
                        image: filename
                    };
        
                    console.log( ` saving to mongo user:`, userData );
                    const newUser = new db.User(userData);
                    newUser.save()
                    .then(user=>{
                        console.log( `user successfully created. now sending redirect request` );
                        res.send({ alert: "Created ok", url: "/login" });
                    })
                    .catch(err=>{
                        errors.push({ msg: err.getMessage() });
                    });
                }
            })
        }

        // if errors output
        if( errors.length>0 ){
            console.log( `x sorry errors: ${errors[0].msg}` );
            res.send({ error: errors[0].msg })
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