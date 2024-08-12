module.exports = (req, res) => {
    if(req.body.default_license == true){
        res.render('g2_page', {user: req.session.user, defaultLicense: true });
    }
    else{
        res.render('g_page', {user: req.session.user, appointment_date: req.body.appointment_date, appointment_slots: req.body.appointment_slots});
    }
    
}