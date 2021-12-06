const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const ExternalLight = require('../models/ExternalLight')

// @desc        Get all external lights
// @route       GET /api/v1/options/external-lights
// @access      Public
exports.getExternalLights = asyncHandler(async (req, res, next) => {
    const externalLights = await ExternalLight.find()

    res.status(200).json({ success: true, count: externalLights.length, data: externalLights })
})

// @desc        Get single external light
// @route       GET /api/v1/options/external-lights/:id
// @access      Public
exports.getExternalLight = asyncHandler(async (req, res, next) => {
    const externalLight = await ExternalLight.findById(req.params.id)

    if (!externalLight) {
        return next(new ErrorResponse(`Resource not found with the id of ${req.params.id}!`, 404))
    }

    res.status(200).json({ success: true, data: externalLight })
})

// @desc        Create new external light
// @route       POST /api/v1/options/external-lights
// @access      Public
exports.createExternalLight = asyncHandler(async (req, res, next) => {
    const externalLight = await ExternalLight.create(req.body)

    res.status(200).json({ success: true, msg: externalLight })
})