const Order = require('./order.model');
const Cart = require('../cart/cart.model');
const inventoryService = require('../inventory/inventory.service');

// ✅ Create Order
const createOrder = async () => {
  const cart = await Cart.findOne({ userId: 1 });

  if (!cart || cart.items.length === 0) {
    throw new Error('Cart is empty');
  }

  // ✅ Reduce stock
  for (const item of cart.items) {
    await inventoryService.reduceStock(
      item.productId,
      item.quantity
    );
  }

  // ✅ Calculate total
  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ Create order
  const order = await Order.create({
    userId: 1,
    items: cart.items,
    totalAmount,
    status: 'CREATED'
  });

  // ✅ Clear cart
  cart.items = [];
  await cart.save();

  return order;
};

// ✅ ADD THESE
const getAllOrders = async () => {
  return await Order.find();
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

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