const mongoose = require('mongoose')

const ToolboxSchema = new mongoose.Schema({
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
        required: [true, 'Please add a price for the toolbox!']
    }
})

module.exports = mongoose.model('Toolbox', ToolboxSchema)