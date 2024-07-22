const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    try {
        let id = req.body.mongo_id;
        let firstname = req.body.first_name;
        let lastname = req.body.last_name;
        let license_no = req.body.license_no;
        license_no = await bcrypt.hash(license_no, 10);
        let age = req.body.age;
        let dob = req.body.dob;
        let car_make = req.body.car_make;
        let car_model = req.body.car_model;
        let car_year = req.body.car_year;
        let car_plate = req.body.car_plate;
        await User.findByIdAndUpdate(id, {
            firstname: firstname,
            lastname: lastname,
            license_no: license_no,
            age: age,
            dob: dob,
            car_details: {
            make: car_make,
            model: car_model,
            year: car_year,
            platno: car_plate
            }
        });
        res.redirect('/logout');
    } catch (error) {
        console.log("Error in entering in db" + error);
    }
}