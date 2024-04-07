const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
    },
    dob:{
        type: Date,
        required : true,
    },
});

const college = mongoose.model('colleges',studentSchema);
module.exports =college;