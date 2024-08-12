const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    try{
        let noError = true;
        if(req.body.firstname == "" || req.body.firstname == "default")
            noError = false;
        else if(req.body.lastname == "" || req.body.lastname == "default")
            noError = false;
        else if(req.body.license_no == "")
            noError = false;
        else if(req.body.age == "" || parseInt(req.body.age) < 18)
            noError = false;
        else if(req.body.dob == "")
            noError = false;
        if(!noError)
            res.redirect("/g2_page");
        }
    catch(err){
        console.log(err);
        return res.status(500).json({message: "Error occurred while validating license number for default case."});
    }
    next();
}