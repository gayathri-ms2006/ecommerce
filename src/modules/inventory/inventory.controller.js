const inventoryService = require('./inventory.service');

// ✅ Create inventory
const createInventory = async (req, res) => {
  const inventory = await inventoryService.createInventory(req.body);
  res.json(inventory);
};

// ✅ Get stock
const getStock = async (req, res) => {
  const inventory = await inventoryService.getStock(req.params.productId);
  res.json(inventory);
};

// ✅ Update stock
const updateStock = async (req, res) => {
  const inventory = await inventoryService.updateStock(
    req.params.productId,
    req.body.quantity
  );

  res.json(inventory);
};

module.exports = {
  createInventory,
  getStock,
  updateStock
};