const express = require('express');
const router = express.Router();

const orderController = require('./order.controller');

// Create order (checkout)
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get order by ID
router.get('/:id', orderController.getOrderById);

// Cancel order
router.patch('/:id/cancel', orderController.cancelOrder);

module.exports = router;