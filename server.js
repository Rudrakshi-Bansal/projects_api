require("dotenv").config()

const express= require('express');
const app= express();


const projectRoute= require('./api/v1/routes/projects');

//Establishing database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error' , (error)=> console.error(error))
db.once('open', ()=>console.log("Connected to database"))

//Establishing connection to server
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Running on Port'))


app.use('/projects', projectRoute)


//Handling 404 Not found errors
app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



