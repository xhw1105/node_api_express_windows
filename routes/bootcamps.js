const express = require('express');
const router = express.Router();
const { getBootcamps, getBootcamp } = require('../controllers/bootcamp');

router.route('/').get(getBootcamps);

router.route('/:id').get(getBootcamp);

// router.get('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, message: `Show bootcamp ${req.params.id}` });
// });

// router.post('/', (req, res) => {
//   res.status(201).json({ success: true, message: 'Create a bootcamp' });
// });

// router.put('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, message: `Update bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
// });

module.exports = router;
