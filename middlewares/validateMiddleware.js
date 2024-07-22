module.exports = (req, res, next) => {
    if(req.body === null || req.body.first_name == ""){
        console.log("Form data is not present!!!!");
        return res.redirect('/g2_page');
    }
    next();
}