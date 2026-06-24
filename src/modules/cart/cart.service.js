const Cart = require('./cart.model');

// ✅ Add item to cart
const addToCart = async (data) => {
  let cart = await Cart.findOne({ userId: 1 });

  // If no cart → create one
  if (!cart) {
    cart = await Cart.create({
      userId: 1,
      items: []
    });
  }

  // Check if item already exists
  const existingItem = cart.items.find(
    item => item.productId == data.productId
  );

  if (existingItem) {
    existingItem.quantity += data.quantity;
  } else {
    cart.items.push(data);
  }

  return await cart.save();
};

// ✅ Get cart
const getCart = async () => {
  return await Cart.findOne({ userId: 1 });
};

// ✅ Update quantity
const updateCartItem = async (itemId, quantity) => {
  const cart = await Cart.findOne({ userId: 1 });

  if (!cart) return null;

  const item = cart.items.id(itemId);

  if (!item) return null;

  item.quantity = quantity;

  return await cart.save();
};

// ✅ Remove item
const removeCartItem = async (itemId) => {
  const cart = await Cart.findOne({ userId: 1 });

  if (!cart) return false;

  const item = cart.items.id(itemId);

  if (!item) return false;

  item.remove();

  await cart.save();

  return true;
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem
};