const express = require('express');
const router = express.Router();

const paymentController = require('./payment.controller');

// Create payment
router.post('/', paymentController.createPayment);

// Update status
router.patch('/:id', paymentController.updatePaymentStatus);

// Get payment
router.get('/:id', paymentController.getPaymentById);

module.exports = router;