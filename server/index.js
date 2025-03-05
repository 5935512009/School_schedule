const express = require("express");
const app = express();
require("dotenv").config();


app.use('/test', async(req,res)=>{
    res.json("hello world Bay");
})

PORT = process.env.PORT|| 5001;
app.listen(PORT,()=>{
    console.log(`server running on localhost ${PORT}`)
})