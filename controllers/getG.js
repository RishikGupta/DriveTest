module.exports = (req, res) => {
    res.render('g_page', {user: req.session.user});
}