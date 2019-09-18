const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
var PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:root1234@ds049854.mlab.com:49854/heroku_6hd4p8qj";

require('./config/passport')(passport);

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {}
app.use(express.static(path.join(__dirname, "client/build")));




app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
//app.use(routes);

require("./routes/auth")(app);
require("./routes/userinfo")(app);
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log('Server is running on PORT', PORT);
});