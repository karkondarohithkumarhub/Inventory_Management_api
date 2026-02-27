const Product = require("../models/Product");


// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "SKU must be unique" });
    }
    res.status(400).json({ error: error.message });
  }
};


// GET ALL PRODUCTS (Filter + Sort)
exports.getProducts = async (req, res) => {
  try {
    const { category, isAvailable, sort } = req.query;

    let filter = {};

    if (category) filter.category = category;
    if (isAvailable !== undefined)
      filter.isAvailable = isAvailable === "true";

    let query = Product.find(filter);

    if (sort) query = query.sort(sort);

    const products = await query;
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET SINGLE PRODUCT
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const updatedData = req.body;

    if (updatedData.quantity !== undefined) {
      updatedData.isAvailable = updatedData.quantity > 0;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// LOW STOCK PRODUCTS (quantity < 5)
exports.getLowStockProducts = async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $lt: 5 } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};