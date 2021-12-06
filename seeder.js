const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors');

// Load env config
dotenv.config({ path: './config/config.env' })

// Load Wheel model
const Wheel = require('./models/Wheel')
const Toolbox = require('./models/Toolbox')
const ExternalLight = require('./models/ExternalLight');
const WaterTank = require('./models/WaterTank');

// Connect to db
mongoose.connect(process.env.MONGO_URI)

// Read json files
const wheels = JSON.parse(fs.readFileSync(`${__dirname}/_data/wheels.json`, 'utf-8'))
const toolboxes = JSON.parse(fs.readFileSync(`${__dirname}/_data/toolboxes.json`, 'utf-8'))
const externalLights = JSON.parse(fs.readFileSync(`${__dirname}/_data/externalLights.json`, 'utf-8'))
const waterTanks = JSON.parse(fs.readFileSync(`${__dirname}/_data/waterTanks.json`, 'utf-8'))

// Import wheels into db
const importData = async () => {
    try {
        await Wheel.create(wheels)
        await Toolbox.create(toolboxes)
        await ExternalLight.create(externalLights)
        await WaterTank.create(waterTanks)

        console.log('data imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(error)
    }
}

// Delete wheels from db
const deleteData = async () => {
    try {
        await Wheel.deleteMany()
        await Toolbox.deleteMany()
        await ExternalLight.deleteMany()
        await WaterTank.deleteMany()

        console.log('Data destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(error)
    }
}

if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}


