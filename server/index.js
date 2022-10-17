//import from packages
const express = require('express');
const mongoose = require('mongoose');


//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://ken:myshop123@cluster0.mlv0iqk.mongodb.net/?retryWrites=true&w=majority"

//imports from other files
const authRouter = require("./routes/auth");

//middleware
app.use(authRouter);

//connections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
})



app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
} );