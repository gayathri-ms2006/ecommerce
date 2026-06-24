const Payment = require('./payment.model');
const Order = require('../order/order.model');

// ✅ Create Payment
const createPayment = async ({ orderId, method }) => {
  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error('Order not found');
  }

  const payment = await Payment.create({
    orderId,
    amount: order.totalAmount,
    status: 'PENDING',
    method
  });

  return payment;
};

// ✅ Update Payment Status
const updatePaymentStatus = async (id, status) => {
  const payment = await Payment.findById(id);

  if (!payment) return null;

  payment.status = status;
  await payment.save();

  // ✅ IMPORTANT: Update Order after payment success
  if (status === 'SUCCESS') {
    await Order.findByIdAndUpdate(
      payment.orderId,
      { status: 'CONFIRMED' }
    );
  }

  return payment;
};

// ✅ Get Payment
const getPaymentById = async (id) => {
  return await Payment.findById(id);
};

module.exports = {
  createPayment,
  updatePaymentStatus,
  getPaymentById
};