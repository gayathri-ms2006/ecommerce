const cartService = require('./cart.service');

// ✅ Add item
const addToCart = async (req, res) => {
  const cart = await cartService.addToCart(req.body);
  res.status(201).json(cart);
};

// ✅ Get cart
const getCart = async (req, res) => {
  const cart = await cartService.getCart();
  res.json(cart);
};

// ✅ Update item
const updateCartItem = async (req, res) => {
  const cart = await cartService.updateCartItem(
    req.params.id,
    req.body.quantity
  );

  if (!cart) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json(cart);
};

// ✅ Remove item
const removeCartItem = async (req, res) => {
  const success = await cartService.removeCartItem(req.params.id);

  if (!success) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json({ message: 'Item removed' });
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem
};