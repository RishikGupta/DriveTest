const User = require('../models/User');
module.exports = async (req, res) => {
    try {
        let id = req.body.mongo_id;
        let pass_fail = (req.body.pass_fail == "true")? true : false;
        let comment = req.body.comment;
        await User.findByIdAndUpdate(id, {
            pass_fail: pass_fail,
            comment: comment
        });
        res.redirect('/examiner');
    } catch (error) {
        console.log("Error in updating user in db in ExaminerUserPost" + error);
    }
    
}