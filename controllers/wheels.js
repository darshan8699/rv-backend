const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const Wheel = require('../models/Wheel')

// @desc        Get all wheels
// @route       GET /api/v1/options/wheels
// @access      Public
exports.getWheels = asyncHandler(async (req, res, next) => {
    const wheels = await Wheel.find()

    res.status(200).json({ success: true, count: wheels.length, data: wheels })
})

// @desc        Get single wheel
// @route       GET /api/v1/options/wheels/:id
// @access      Public
exports.getWheel = asyncHandler(async (req, res, next) => {
    const wheel = await Wheel.findById(req.params.id)

    if (!wheel) {
        return next(new ErrorResponse(`Resource not found with the id of ${req.params.id}!`, 404))
    }

    res.status(200).json({ success: true, data: wheel })
})

// @desc        Create new wheel
// @route       POST /api/v1/options/wheels
// @access      Public
exports.createWheel = asyncHandler(async (req, res, next) => {
    const wheel = await Wheel.create(req.body)

    res.status(200).json({ success: true, msg: wheel })
})