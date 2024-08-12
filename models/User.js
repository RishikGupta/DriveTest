const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        default: "default",
    },
    password: {
        type: String,
        required: true,
        default: "default",
    },
    firstname: {
        type: String,
        default: "default",
    },
    lastname: {
        type: String,
        default: "default",
    },
    user_type: String,
    license_no: {
        type: String,
        unique: true,
        required: true,
        default: "default"
    },
    age: {
        type: Number,
        default: 0,
    },
    dob: {
        type: String,
        required: true,
        default: "default"
    },
    car_details: {
    make: {
        type: String,
        default: "default",
    },
    model: {
        type: String,
        default: "default",
    },
    year: {
        type: Number,
        default: 0,
    },
    platno: {
        type: String,
        default: "default"
    }
    },
    appointment_id: {
        type: Schema.Types.ObjectId,
        ref: "Appointment"
    },
    testType: {
        type: String,
        default: "default"
    },
    comment: {
        type: String,
        default: "default"
    },
    pass_fail: {
        type: Boolean,
        default: false
    }
});
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
        });
})
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.license_no, 10, (error, hash) => {
        user.license_no = hash;
        next();
        });
})

const User = mongoose.model("User", UserSchema);
module.exports = User;