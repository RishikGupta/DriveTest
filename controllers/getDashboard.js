module.exports = (req, res) => {
    res.render('dashboard', {user: req.session.user});
}