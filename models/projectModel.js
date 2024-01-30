const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description: String,
    department: {
        type: String,
        required: true 
    },
    github: String,
    imageURL: String,
    contributors : [{type: Number}] 

})

module.exports = mongoose.model("Project", projectSchema)

