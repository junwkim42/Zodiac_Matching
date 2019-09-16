const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const matchesSeed = [
  {
    id: 1,
    name: "Chloie",
    gender: "Female",
    birthdate: "21-Mar-1997",
    age: 22,
    profilePic: "https://data.whicdn.com/images/302058504/large.jpg?t=1511579073",
    zodiacSign: "Aries"
  },
  {
    id: 2,
    name: "Hally",
    gender: "Female",
    birthdate: "20-Apr-1996",
    age: 23,
    profilePic: "https://www.best4geeks.com/wp-content/uploads/2018/08/30-broken-heart-girl-profile-picture-Copy.jpg",
    zodiacSign: "Taurus"
},
{
    id: 3,
    name: "Panda",
    gender: "Female",
    birthdate: "21-May-1998",
    age: 21,
    profilePic: "https://www.best4geeks.com/wp-content/uploads/2018/07/30-cute-girl-facebook-profile-picture-1.jpg",
    zodiacSign: "Gemini"
},
{
    id: 4,
    name: "Mike",
    gender: "Male",
    birthdate: "21-Jun-1990",
    age: 29,
    profilePic: "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
    zodiacSign: "Cancer"
},
{
    id: 5,
    name: "Facebook Man",
    gender: "Male",
    birthdate: "23-Jul-1980",
    age: 39,
    profilePic: "https://www.sibbaldtraining.com/wp-content/uploads/2017/05/dummy-profile-pic-male1.jpg",
    zodiacSign: "Leo"
},
{
    id: 6,
    name: "Warren",
    gender: "Male",
    birthdate: "23-Aug-2000",
    age: 19,
    profilePic: "https://pbs.twimg.com/profile_images/740015971025354752/B58eohC3_400x400.jpg",
    zodiacSign: "Virgo"
},
{
    id: 7,
    name: "Angelina",
    gender: "Female",
    birthdate: "23-Sep-1995",
    age: 24,
    profilePic: "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",
    zodiacSign: "Libra"
  },
  {
    id: 8,
    name: "Art",
    gender: "Male",
    birthdate: "26-Oct-1986",
    age: 33,
    profilePic: "https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800",
    zodiacSign: "Scorpio"
},
{
    id: 9,
    name: "Kate",
    gender: "Female",
    birthdate: "22-Nov-2001",
    age: 17,
    profilePic: "https://live.staticflickr.com/4606/39945007434_3ec00a2fd4_b.jpg",
    zodiacSign: "Sagittarius"
},
{
    id: 10,
    name: "Maxine",
    gender: "Female",
    birthdate: "21-Sep-1995",
    age: 24,
    profilePic: "https://steamuserimages-a.akamaihd.net/ugc/263843003897408174/78E02EA5E7CC13D64E16F6C6691B6CC7379123EB/",
    zodiacSign: "Virgo"
},
{
    id: 11,
    name: "Jefferson",
    gender: "Male",
    birthdate: "20-Jan-1982",
    age: 37,
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxGHaDpIhz6EuI6iYYulYTPFQcWFTvP88xK07Gf-nO5EtSOTl",
    zodiacSign: "Aquarius"
},
{
    id: 12,
    name: "Nathan",
    gender: "Male",
    birthdate: "19-Feb-1999",
    age: 20,
    profilePic: "https://vignette.wikia.nocookie.net/villains/images/1/1f/Nathan.PNG/revision/latest?cb=20150201064958",
    zodiacSign: "Pisces"
},
{
    id: 13,
    name: "Dana",
    gender: "Female",
    birthdate: "11-Jul-1995",
    age: 24,
    profilePic: "https://vignette.wikia.nocookie.net/life-is-strange/images/4/49/Dana_Ward_bts.png/revision/latest?cb=20170901184343",
    zodiacSign: "Cancer"
},
{
    id: 14,
    name: "Victoria",
    gender: "Female",
    birthdate: "14-Aug-1995",
    age: 24,
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYJRzrfeXdwDgOFwHNA2nqAH4H4Jl4bylgSrWAWVvDkwgCBrsOg",
    zodiacSign: "Leo"
},
{
    id: 15,
    name: "Taylor",
    gender: "Female",
    birthdate: "22-Dec-1993",
    age: 26,
    profilePic: "https://pm1.narvii.com/6542/4543efcebb003dd626140121b940da2e6d803a23_00.jpg",
    zodiacSign: "Capricorn"
  },
  {
    id: 16,
    name: "Rachel",
    gender: "Female",
    birthdate: "22-May-1994",
    age: 25,
    profilePic: "https://external-preview.redd.it/tzBgFbGl7aUMSihyE0hbNp5m8_ZXl9jvcN52axLkSxo.jpg?auto=webp&s=9dcf94c439e765c5b7c52360843d5b9c62f3e53b",
    zodiacSign: "Gemini"
},
{
    id: 17,
    name: "Frank",
    gender: "Male",
    birthdate: "31-Aug-1981",
    age: 38,
    profilePic: "https://vignette.wikia.nocookie.net/life-is-strange/images/d/d7/Frank_Bowers.jpg/revision/latest?cb=20150821114017&path-prefix=de",
    zodiacSign: "Virgo"
},
{
    id: 18,
    name: "Ethan",
    gender: "Male",
    birthdate: "05-Oct-1973",
    age: 46,
    profilePic: "https://vignette.wikia.nocookie.net/playstationallstarsfanfictionroyale/images/2/21/Ethanmars.jpg/revision/latest?cb=20130409223931",
    zodiacSign: "Libra"
},
{
    id: 19,
    name: "Jayden",
    gender: "Male",
    birthdate: "14-Nov-1978",
    age: 41,
    profilePic: "https://www.nautiljon.com/images/jeuxvideo_persos/00/15/norman_jayden_2251.jpg?0",
    zodiacSign: "Scorpio"
},
{
    id: 20,
    name: "Sean",
    gender: "Male",
    birthdate: "15-Mar-2000",
    age: 19,
    profilePic: "https://videochums.com/article/life-is-strange-2-characters.jpg",
    zodiacSign: "Pisces"
}
];

db.matches
  .remove({})
  .then(() => db.matches.collection.insertMany(matchesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });