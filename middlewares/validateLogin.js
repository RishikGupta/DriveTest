const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    if(req.body === null || req.body.login_username === "" || req.body.login_password === ""){
        console.log("Form data is not present!!!!");
        return res.redirect('/login');
    }
    const user = await User.findOne({username: req.body.login_username});
    console.log(user);
    console.log("validateLogin");
    await bcrypt.compare(req.body.login_password, user.password, (err, match) => {
        if(match) {
            
            console.log("successful match");
            req.session.user = user;
            next();
        }
        else {
            console.log("unsuccessful match");
            res.redirect('/login');
        }
    })
}