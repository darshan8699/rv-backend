const mongoose = require('mongoose')

const WheelSchema = new mongoose.Schema({
    included: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: [true, 'Please add name!'],
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    price: {
        type: Number,
        required: [true, 'Please add a price for the wheel!']
    },
    size: {
        type: Number,
        required: [true, 'Please choose a size of the wheel!']
    },
    brand: {
        type: String,
        required: [true, 'Please enter a brand name!']
    }
})

module.exports = mongoose.model('Wheel', WheelSchema)