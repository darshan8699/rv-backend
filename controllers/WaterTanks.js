const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const WaterTank = require('../models/WaterTank')

// @desc        Get all water tanks
// @route       GET /api/v1/options/water-tanks
// @access      Public
exports.getWaterTanks = asyncHandler(async (req, res, next) => {
    const waterTanks = await WaterTank.find()

    res.status(200).json({ success: true, count: waterTanks.length, data: waterTanks })
})

// @desc        Get single water tank
// @route       GET /api/v1/options/water-tank/:id
// @access      Public
exports.getWaterTank = asyncHandler(async (req, res, next) => {
    const waterTank = await WaterTank.findById(req.params.id)

    if (!waterTank) {
        return next(new ErrorResponse(`Resource not found with the id of ${req.params.id}!`, 404))
    }

    res.status(200).json({ success: true, data: waterTank })
})

// @desc        Create new water tank
// @route       POST /api/v1/options/water-tanks
// @access      Public
exports.createWaterTank = asyncHandler(async (req, res, next) => {
    const waterTank = await WaterTank.create(req.body)

    res.status(200).json({ success: true, msg: waterTank })
})