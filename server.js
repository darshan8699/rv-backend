const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./middlewares/error')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load route files
const wheels = require('./routes/wheels')
const toolboxes = require('./routes/toolboxes')
const externalLights = require('./routes/externalLights')
const waterTanks = require('./routes/waterTanks')

// Connect to databae
connectDB()

const app = express()

// Body parser
app.use(express.json())

// Dev logging middleware
app.use(morgan('dev'))

// Mount routers
app.use('/api/v1/options/wheels', wheels)
app.use('/api/v1/options/toolboxes', toolboxes)
app.use('/api/v1/options/external-lights', externalLights)
app.use('/api/v1/options/water-tanks', waterTanks)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server & exit process
    server.close(() => process.exit(1))
})