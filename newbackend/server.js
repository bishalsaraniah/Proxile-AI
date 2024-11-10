const express = require("express");
const cors = require("cors");

const videosummaryroutes = require("./routes/videosummary.js");
// const pdfsummaryroutes = require("./routes/pdfsummary.js");
require("dotenv").config();

const app= express()
app.use(cors())
app.use(express.json())

app.use('/',(req,res,next)=>{
    console.log(req.method,req.path);
    next();
})
app.use('/api/videosummary',videosummaryroutes)
// app.use('/api/pdfsummary',pdfsummaryroutes)



app.listen(process.env.PORT, ()=>{
        console.log('Database is connected and server is running on port ',process.env.PORT)
    })