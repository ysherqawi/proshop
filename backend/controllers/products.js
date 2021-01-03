import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';
import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );

  res.status(200).json({
    success: true,
    data: product,
  });
});

export { getProducts, getProduct };