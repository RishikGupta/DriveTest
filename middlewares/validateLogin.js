const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    if(req.body === null || req.body.login_username === "" || req.body.login_password === ""){
        console.log("Form data is not present!");
        return res.redirect('/login');
    }
    const user = await User.findOne({username: req.body.login_username});
    console.log("valid user! Now checking password.");
    bcrypt.compare(req.body.login_password, user.password, (err, match) => {
        if(match) {
            console.log("Password successful match: Now logging you in");
            req.session.user = user;
            next();
        }
        else {
            console.log("Password unsuccessful match: Please try again");
            res.redirect('/login');
        }
    })
}