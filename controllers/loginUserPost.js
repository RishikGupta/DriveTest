const User = require('../models/User');
module.exports = async (req, res) => {
    console.log("User found in database");
    res.redirect('/dashboard');
}