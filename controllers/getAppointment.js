const Appointment = require('../models/Appointment');
module.exports = (req, res) => {
    res.render('appointment', { user: req.session.user, appointment_slots: req.body.appointment_slots, appointment_date: req.body.appointment_date, usersArray: req.body.usersArray });
}