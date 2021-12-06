const mongoose = require('mongoose')

const WaterTankSchema = new mongoose.Schema({
    included: {
        type: Boolean,
        default: false
    },
    capacity: {
        type: Number,
        required: [true, 'Please add capacity of water tank in liters!']
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    price: {
        type: Number,
        required: [true, 'Please add a price for the water tank!']
    }
})

module.exports = mongoose.model('WaterTank', WaterTankSchema)