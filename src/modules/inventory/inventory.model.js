const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },

  stock: {
    type: Number,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);