const mongoose = require('mongoose')

const WheelSchema = new mongoose.Schema({
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

const OptionSchema = new mongoose.Schema({
    wheel: {
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
        options: {
            size: {
                type: Number,
                required: [true, 'Please choose a size of the wheel!']
            },
            brand: {
                type: String,
                required: [true, 'Please enter a brand name!']
            }
        }
    },
    toolbox: {
        name: {
            type: String,
            required: [true, 'Please add name!'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price for the wheel!']
        },
        option: {
            photo: {
                type: String,
                default: 'no-photo.jpg'
            }
        }
    },
    extra_light: {
        type: {
            type: String,
            required: [true, 'Please add a type!'],
        },
        options: {
            side: {
                name: {
                    type: String
                },
                price: {
                    type: Number,
                    required: [true, 'Please add a price for the wheel!']
                },
                photo: {
                    type: String,
                    default: 'no-photo.jpg'
                }
            },
        }
    },
    water_tank: {
        capacity: {
            type: Number,
            required: [true, 'Please add capacity in litres!']
        },
        photo: {
            type: String,
            default: 'no-photo.jpg'
        },
        price: {
            type: Number,
            required: [true, 'Please add a price for the wheel!']
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Option', OptionSchema)