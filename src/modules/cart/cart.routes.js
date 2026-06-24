const express = require('express');
const router = express.Router();

const cartController = require('./cart.controller');

// Add item
router.post('/items', cartController.addToCart);

// Get cart
router.get('/', cartController.getCart);

// Update quantity
router.patch('/items/:id', cartController.updateCartItem);

// Remove item
router.delete('/items/:id', cartController.removeCartItem);

module.exports = router;