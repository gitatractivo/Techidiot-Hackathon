const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const object = new mongoose.Schema({
    step1: [String],
    step2: [String],
    step3: [String],
    step4: [String],

});

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: 100,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    age:{
        type: Number,
        required: true,
    },
    therapists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist',
        default: null
    }],
    options:{
        type:object,
    }




});
const User = mongoose.model("User", userSchema)



module.exports=  User;
