// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

// @desc        Get a specified bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show a bootcamp' });
};
