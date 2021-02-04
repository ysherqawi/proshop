import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';
import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
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
    product,
  });
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res, next) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json({ success: true, createdProduct });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (!product)
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );

  product.name = name;
  product.price = price;
  product.description = description;
  product.image = image;
  product.brand = brand;
  product.category = category;
  product.countInStock = countInStock;

  const updatedProduct = await product.save();
  res.json({ success: true, updatedProduct });
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );

  await product.remove();
  res.status(200).json({
    success: true,
    message: 'Poduct removed!',
  });
});

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
