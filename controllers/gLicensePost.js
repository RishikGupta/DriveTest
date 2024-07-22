const User = require('../models/User');
module.exports = async (req, res) => {
    
    const user = await User.findOne({ firstname: firstname });
    if (user) {
        bcrypt.compare(license_no, user.license_no, (error, same) => {
            if (error) {
            throw error; // Throw an error to the catch block
            }
            if (same) {
                console.log("user_data sent:" + user);
                res.locals.user = user;
                res.render('g_page');
            }
        });
        
    } else {
        console.log("user not found!");
        res.locals.user = null;
        res.locals.err_msg = "User not found";
        res.render('g_page');
    }
}