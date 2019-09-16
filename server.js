require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

require('./config/passport')(passport);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zodiac", { useNewUrlParser: true })
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});