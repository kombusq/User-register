const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male", "female", "other"]
    },
    dob:{
        type:String,
        require:true,
    },
    country:{
        type:String,
        required:true,

    }
});

module.exports = mongoose.model("user", userSchema);