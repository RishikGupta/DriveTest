const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    
    try{
        const gUserArray = [];
        let gAppointmentArray = [];
        const g2UserArray = [];
        let g2AppointmentArray = [];
        const users = await User.find();
        const allAppointments = await Appointment.find();
        for (const user of users) {
            if(user.testType == "G"){
                gUserArray.push(user);
            }
            else if(user.testType == "G2")
                g2UserArray.push(user);
        }
        gAppointmentArray = gUserArray.map((user) => {
            const final_user = user;
            let final_appointment = {};
            for(const appointment_object of allAppointments){
                let found_appointment = false;
                for(const appointment of appointment_object.appointment_slots){
                    if(appointment._id.equals(user.appointment_id)){
                        final_appointment.appointment_slot = appointment;
                        found_appointment = true;
                        break;
                    }
                }
                
                if(found_appointment){
                    final_appointment.appointment_date = appointment_object.appointment_date.toDateString();
                }
            }
            return {
                user: final_user,
                appointment: final_appointment
            }
        });
        g2AppointmentArray = g2UserArray.map((user) => {
            const final_user = user;
            let final_appointment = {};
            for(const appointment_object of allAppointments){
                let found_appointment = false;
                for(const appointment of appointment_object.appointment_slots){
                    if(appointment._id.equals(user.appointment_id)){
                        final_appointment.appointment_slot = appointment;
                        found_appointment = true;
                        break;
                    }
                }
                if(found_appointment){
                    final_appointment.appointment_date = appointment_object.appointment_date.toDateString();
                }
            }
            return {
                user: final_user,
                appointment: final_appointment
            }
        });
        res.locals.gAppointments = gAppointmentArray;
        res.locals.g2Appointments = g2AppointmentArray;
    }
    catch(error){
        console.log("Error in fetching appointments and users in Examiner" + error);
    }
    next();
}