const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppointmentSchema = new Schema({
    appointment_date: {
        type: Date,
        required: true,
        default: "default",
    },
    appointment_slots: [
        {
            appointment_time: {
                type: String,
                default: "default",
            },
            isTimeSlotAvailable: {
                type: Boolean,
                default: true,
            }
        }
        
    ]
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;