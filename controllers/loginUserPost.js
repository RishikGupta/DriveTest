const User = require('../models/User');
module.exports = async (req, res) => {
    console.log("User logged in now at dashboard.");
    res.redirect('/dashboard');
}