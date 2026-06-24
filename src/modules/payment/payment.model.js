const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: 'PENDING'
  },

  method: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);