const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },

  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);