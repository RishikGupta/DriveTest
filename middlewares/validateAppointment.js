const Appointment = require('../models/Appointment');
const User = require('../models/User');
module.exports = async (req, res, next) => {
    try {
        if(req.body.appointment_date == undefined || req.body.appointment_date == "" || req.body.appointment_date == null) {
            console.log('Appointment date is undefined');
        }
        else if (req.body.selected_time == undefined){
            let appointment_date = req.body.appointment_date;
            let appointment_object = await Appointment.findOne({appointment_date: appointment_date});
            if(appointment_object == null){
                await Appointment.create({
                    appointment_date: appointment_date,
                    appointment_slots: []
                })
                req.body.appointment_slots = [];
            }
            else {
                console.log('Appointment date exists for ', appointment_object.appointment_slots);
                req.body.appointment_slots = appointment_object.appointment_slots;
            }
        }
        else if (req.body.appointment_date && req.body.selected_time){
            let appointment_date = req.body.appointment_date;
            let selected_time = req.body.selected_time;
            let appointment_object = await Appointment.findOne({appointment_date: appointment_date});
            appointment_object.appointment_slots.push(
                {
                    appointment_time: selected_time,
                }
            );
            let new_appointment_array = appointment_object.appointment_slots;
            await Appointment.updateOne({
                appointment_date: appointment_date}, {appointment_slots: new_appointment_array
            })
        }
        const usersArray = await User.find();
        req.body.usersArray = [];
        usersArray.forEach(user => {
            if(user.testType == "G" || user.testType == "G2")
                req.body.usersArray.push(user);
        });
        next();
    } catch (error) {
        console.log("Error in entering in db in ValidateAppointment" + error);
    }
}
    