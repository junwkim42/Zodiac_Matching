<<<<<<< HEAD
require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

//const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
//app.use(routes);

require("./routes/auth")(app);
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));




// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zodiac");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
=======
>>>>>>> junwon
