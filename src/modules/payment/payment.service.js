const Payment = require('./payment.model');
const Order = require('../order/order.model');
const inventoryService = require('../inventory/inventory.service');
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

  const order = await Order.findById(payment.orderId);

  
  if (status === 'SUCCESS') {
    await Order.findByIdAndUpdate(
      payment.orderId,
      { status: 'CONFIRMED' }
    );
  }

  
  if (status === 'FAILED') {
    if (order) {
      for (const item of order.items) {
        await inventoryService.restoreStock(
          item.productId,
          item.quantity
        );
      }

      await Order.findByIdAndUpdate(
        payment.orderId,
        { status: 'FAILED' }
      );
    }
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