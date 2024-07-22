module.exports = (req, res, next) => {
    if(req.body === null || req.body.username === ""){
        console.log("Form data is not present!!!!");
        return res.redirect('/login');
    }
    console.log(req.body);
    next();
}