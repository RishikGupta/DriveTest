const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        let id = req.body.mongo_id;
        let car_make = req.body.car_make;
        let car_model = req.body.car_model;
        let car_year = req.body.car_year;
        let car_plate = req.body.car_plate;
        await User.findByIdAndUpdate(id, {
            car_details: {
            make: car_make,
            model: car_model,
            year: car_year,
            platno: car_plate
            }
        })
        req.session.user.car_details = {
            make: car_make,
            model: car_model,
            year: car_year,
            platno: car_plate
        }
        res.redirect('/g_page');
    } catch (error) {
        console.log("Error in entering in db" + error);
    }
}