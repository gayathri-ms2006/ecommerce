const orderService = require('./order.service');

// ✅ Create Order
const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// ✅ Get all
const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.json(orders);
};

// ✅ Get by ID
const getOrderById = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: 'Order not found'
    });
  }

  res.json(order);
};

// ✅ Cancel
const cancelOrder = async (req, res) => {
  const order = await orderService.cancelOrder(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: 'Order not found'
    });
  }

  res.json(order);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  cancelOrder
};