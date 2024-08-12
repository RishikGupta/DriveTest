const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    try{
        req.body.default_license = bcrypt.compareSync("default", req.session.user.license_no, (err, result) => {
            if (result)
                return true;
            else
                return false;
        })
        if(req.body.appointment_date == undefined || req.body.appointment_date == ""){
            console.log("Appointment date not selected for G2 Test");
        }
        else if(req.body.selected_time == undefined || req.body.selected_time == null){
            console.log("Time slot not selected for G2 Test");
            let appointment_date = req.body.appointment_date;
            console.log("Appointment date selected for G2 Test: " + appointment_date);
            let appointment_object = await Appointment.findOne({appointment_date: appointment_date});
            if(appointment_object){
                req.body.appointment_slots = appointment_object.appointment_slots;
            }
            else{
                console.log("No appointments found for the selected date for G2 Test");
            }
        }
        else if(req.body.appointment_date && req.body.selected_time){
            console.log("Both appointment date and time selected for G2 Test");
            let appointment_date = req.body.appointment_date;
            let appointment_object = await Appointment.findOne({appointment_date: appointment_date});
            let user_object = await User.findOne({
                username: req.session.user.username
            })
            if(user_object.appointment_id == null){
                console.log("User has no appointment");
                const selected_slot_object = appointment_object.appointment_slots.filter(slot => slot.appointment_time == req.body.selected_time)
                console.log(selected_slot_object);
                appointment_object.appointment_slots = appointment_object.appointment_slots.map((slot) => {
                    if(slot == selected_slot_object[0]){
                        return {...slot, isTimeSlotAvailable: false}
                    }
                    else{
                        return slot
                    }
                })
                console.log(appointment_object.appointment_slots);
                await User.updateOne({username: user_object.username}, {appointment_id: selected_slot_object[0]._id, testType: "G2"})
                await Appointment.updateOne({
                    appointment_date: appointment_date,
                }, appointment_object)
            }
            else{
                console.log("User already has an appointment");
            }
        }
    }
    catch(error){
        console.log("Error occurred in selecting the appointment selection: in G2 " + error);
    }
    next();
}