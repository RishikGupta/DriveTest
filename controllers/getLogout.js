module.exports = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.redirect("/dashboard");
        }
        res.clearCookie("rishik7619");
        res.redirect("/login");
    });
    console.log("Logged out");
};