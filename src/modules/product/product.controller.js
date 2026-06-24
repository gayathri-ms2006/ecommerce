const productService = require('./product.service');

// ✅ Create
const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get all
const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

// ✅ Get one
const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(product);
};

// ✅ Update
const updateProduct = async (req, res) => {
  const updated = await productService.updateProduct(
    req.params.id,
    req.body
  );

  if (!updated) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(updated);
};

// ✅ Delete
const deleteProduct = async (req, res) => {
  const deleted = await productService.deleteProduct(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json({ message: 'Deleted successfully' });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};