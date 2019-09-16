const express = require('express');
const router = express.Router();

// login page
router.get('/login', (req, res) => res.send ('login'));

//signup page 
router.get('/signup', (req, res) => res.send ('signup'));

// profile page
router.get('/profile', (req, res) => res.send ('profile'));

// matches page 
router.get('/matches', (req, res) => res.send ('matches'));

module.exports = router;
