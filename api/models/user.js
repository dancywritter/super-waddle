const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
        match: /^([7-9][0-9]{9})$/g
    },
    password: { type: String, required: true },
    verify: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);