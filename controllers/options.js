const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const Option = require('../models/Option')

// @desc        Get all
// @route       GET /api/v1/options
// @access      Public
exports.getOptions = asyncHandler(async (req, res, next) => {
    const options = await Option.find()

    res.status(200).json({ success: true, count: options.length, data: options })
})