const express = require('express');
const router = express.Router();

const inventoryController = require('./inventory.controller');

// Create inventory
router.post('/', inventoryController.createInventory);

// Get stock
router.get('/:productId', inventoryController.getStock);

// Update stock
router.patch('/:productId', inventoryController.updateStock);

module.exports = router;