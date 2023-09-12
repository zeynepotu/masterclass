// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'})
};

// @desc    Get bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    res.status(200).json({success:true, msg: `Get bootcamp ${req.params.id}`})
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    res.status(200).json({success:true, msg: `Update this bootcamp ${req.params.id}`})
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    res.status(200).json({success:true, msg:`Delete this bootcamp ${req.params.id}`})
}
