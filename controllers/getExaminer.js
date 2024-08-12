module.exports = (req, res) => {
        res.render('examiner', {user: req.session.user, gAppointments: res.locals.gAppointments, g2Appointments: res.locals.g2Appointments});
}