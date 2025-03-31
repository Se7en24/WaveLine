const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookingController');

router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.getAllBookings);
router.get('/bookings/:id', bookingController.getBookingById);

// ✅ Add this route to update a booking's status
router.put('/bookings/:id', bookingController.updateBookingStatus);

module.exports = router;
