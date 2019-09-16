var db = require("../models");
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

    app.post("/join", upload.single('image'), async (req, res)=>{
        console.log( JSON.stringify( req.body.file) );
        const {username, password, birthDate, gender, file} = req.body;
        console.log("api");
        console.log(req.body);
        let errors = [];

        if(!username || !password || !birthDate || !gender || !file){
            errors.push({ msg: "Please fill in all fields"});
        }

        if (password.length < 6){
            errors.push({ msg: "Password should be at least 6 characters"});           
        }

        
        // await picture upload to complete THEN 
        // post to database
        const imagePath = __dirname+'/client/public/images';
        const fileUpload = new Resize(imagePath);
        if (!req.file) {
            errors.push({ msg: "Please provide an image"});           
        }
        const filename = await fileUpload.save(req.file.buffer);
        // we should now have a filename for the uploaded file.
        // post this with the other data to databse.
        console.log( `>>>>>> filename: ${filename}` );
        
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
                        birthDate: birthDate,
                        gender: gender,
                        image: filename
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
}