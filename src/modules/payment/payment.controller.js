const paymentService = require('./payment.service');

// ✅ Create payment
const createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// ✅ Update payment
const updatePaymentStatus = async (req, res) => {
  const payment = await paymentService.updatePaymentStatus(
    req.params.id,
    req.body.status
  );

  if (!payment) {
    return res.status(404).json({
      message: 'Payment not found'
    });
  }

  res.json(payment);
};

// ✅ Get payment
const getPaymentById = async (req, res) => {
  const payment = await paymentService.getPaymentById(req.params.id);

  if (!payment) {
    return res.status(404).json({
      message: 'Payment not found'
    });
  }

  res.json(payment);
};

module.exports = {
  createPayment,
  updatePaymentStatus,
  getPaymentById
};