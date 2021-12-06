const mongoose = require('mongoose')

const ExternalLightSchema = new mongoose.Schema({
    included: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: [true, 'Please choose a type!'],
        enum: [
            'Work',
            'Travel'
        ]
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
        required: [true, 'Please add a price for the external light!']
    }
})

module.exports = mongoose.model('ExternalLight', ExternalLightSchema)