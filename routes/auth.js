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
                    const userData = {
                        name: name,
                        username: username,
                        password: password,
                        birthDate: birthDate,
                        gender: gender,
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