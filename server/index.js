const express = require("express");
const app = express();

app.use('/test', async(req,res)=>{
    res.json("hello world Bay");
})

PORT = 4001
app.listen(PORT,()=>{
    console.log(`server running on localhost ${PORT}`)
})