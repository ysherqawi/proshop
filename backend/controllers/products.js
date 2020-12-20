import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    res
      .status(404)
      .json({ message: `Product not found with id of ${req.params.id}` });
  res.json(product);
});

export { getProducts, getProduct };
