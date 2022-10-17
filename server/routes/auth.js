const express = require('express');
const User = require('../models/user');


const authRouter = express.Router();


authRouter.post('/api/signup', async (req, res) => {
  
    //data from client with validation in user.js (model folder in schema)
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({ email }); //existing user/email
    if(existingUser) {
        return res.status(400)({ msg: "User With the email already exist!"})
    }


let user = new User({
    email,
    password,
    name,
})
user = await user.save();
res.json(user);

   
    //data into db

   
   
    //return data to user

});

module.exports = authRouter;
