const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//image, profile pics needed
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: String, required: true },
  zodiac: {type: String},
  name: { type: String },
  interest: { type: String},
  location: {type: String},
  gender: {type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
