const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let firstname = req.body.first_name;
        let lastname = req.body.last_name;
        let user_type = req.body.user_type;
        let license_no = req.body.license;
        let age = req.body.age;
        let dob = req.body.dob;
        let car_make = req.body.car_make;
        let car_model = req.body.car_model;
        let car_year = req.body.car_year;
        let car_plate = req.body.car_plate;

        if(password == ""){
            password = undefined;
        }
        if(firstname == ""){
            firstname = undefined;
        }
        if(lastname == ""){
            lastname = undefined;
        }
        if(license_no == ""){
            license_no = undefined;
        }
        if(age == ""){
            age = undefined;
        }
        if(car_make == ""){
            car_make = undefined;
        }
        if(car_model == ""){
            car_model = undefined;
        }
        if(car_year == ""){
            car_year = undefined;
        }
        if(car_plate == ""){
            car_plate = undefined;
        }
        await User.create({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            user_type: user_type,
            license_no: license_no,
            age: age,
            dob: dob,
            car_details: {
            make: car_make,
            model: car_model,
            year: car_year,
            platno: car_plate
            }
        })
        res.redirect('/login');
    } catch (error) {
        console.log("Error in entering in db" + error);
    }
}