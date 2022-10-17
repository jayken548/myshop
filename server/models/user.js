const mongoose = require('mongoose');
//data schema for/into mongo with validation
const userSchema = mongoose.Schema({
    name: {
        required: true,
        trim: true,
        type: String,
    },
    email: {
        required: true,
        trim: true,
        type: String,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                value.match(re);
                return value.match(re);
            },
            message: 'Enter valid email ID'
        },
    },
    password: {
        required: true,
        type: String,
        validator: (value) => {
            
            return value.length > 6;
        },
        message: 'Password Must Be atleast 6 char'
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type:String,
        default: 'user',
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;