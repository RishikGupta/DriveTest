const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = (req, res) => {
    bcrypt.compare("default", req.session.user.license_no, (err, result) => {
        if(result) {
            console.log("default license");
            res.render('g2_page', {user: req.session.user, defaultLicense: true });
            
        } else {
            console.log("not default license");
            res.render('g2_page', {user: req.session.user, defaultLicense: false });
        }
    })
}