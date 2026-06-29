const Inventory = require('./inventory.model');

// ✅ Create inventory
const createInventory = async (data) => {
  return await Inventory.create(data);
};

// ✅ Get stock by product
const getStock = async (productId) => {
  return await Inventory.findOne({ productId });
};

// ✅ Update stock
const updateStock = async (productId, quantity) => {
  const inventory = await Inventory.findOne({ productId });

  if (!inventory) {
    throw new Error('Inventory not found');
  }

  inventory.stock = quantity;
  return await inventory.save();
};

// ✅ Reduce stock (important)
const reduceStock = async (productId, quantity) => {
  const inventory = await Inventory.findOne({ productId });

  if (!inventory) {
    throw new Error('Inventory not found');
  }

  if (inventory.stock < quantity) {
    throw new Error('Not enough stock');
  }

  inventory.stock -= quantity;
  return await inventory.save();
};
// ✅ Restore stock (NEW)
const restoreStock = async (productId, quantity) => {
  const inventory = await Inventory.findOne({ productId });

  if (!inventory) {
    throw new Error('Inventory not found');
  }

  inventory.stock += quantity;

  return await inventory.save();
};
module.exports = {
  createInventory,
  getStock,
  updateStock,
  reduceStock,
  restoreStock
};