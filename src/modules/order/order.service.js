const Order = require('./order.model');
const Cart = require('../cart/cart.model');

// ✅ Create Order (checkout)
const createOrder = async () => {
  const cart = await Cart.findOne({ userId: 1 });

  if (!cart || cart.items.length === 0) {
    throw new Error('Cart is empty');
  }

  // ✅ Calculate total
  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Create order
  const order = await Order.create({
    userId: 1,
    items: cart.items,
    totalAmount,
    status: 'CREATED'
  });

  // ✅ Clear cart after order
  cart.items = [];
  await cart.save();

  return order;
};

// ✅ Get all orders
const getAllOrders = async () => {
  return await Order.find();
};

// ✅ Get order by ID
const getOrderById = async (id) => {
  return await Order.findById(id);
};

// ✅ Cancel order
const cancelOrder = async (id) => {
  return await Order.findByIdAndUpdate(
    id,
    { status: 'CANCELLED' },
    { new: true }
  );
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  cancelOrder
};