const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const Toolbox = require('../models/Toolbox')

// @desc        Get all toolboxes
// @route       GET /api/v1/options/toolboxes
// @access      Public
exports.getToolboxes = asyncHandler(async (req, res, next) => {
    const toolboxes = await Toolbox.find()

    res.status(200).json({ success: true, count: toolboxes.length, data: toolboxes })
})

// @desc        Get single toolbox
// @route       GET /api/v1/options/toolboxes/:id
// @access      Public
exports.getToolBox = asyncHandler(async (req, res, next) => {
    const toolbox = await Toolbox.findById(req.params.id)

    if (!toolbox) {
        return next(new ErrorResponse(`Resource not found with the id of ${req.params.id}!`, 404))
    }

    res.status(200).json({ success: true, data: toolbox })
})

// @desc        Create new toolbox
// @route       POST /api/v1/options/toolboxes
// @access      Public
exports.createToolbox = asyncHandler(async (req, res, next) => {
    const toolbox = await Toolbox.create(req.body)

    res.status(200).json({ success: true, msg: toolbox })
})