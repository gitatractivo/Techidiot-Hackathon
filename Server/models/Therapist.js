const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    specialties: [String],
    appointments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }],
    address: {
        type: String,
        required: true
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    contactNumber: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Therapist', therapistSchema);