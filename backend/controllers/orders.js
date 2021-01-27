import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';
import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxprice,
    totlaPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0)
    return next(new ErrorResponse('No order items', 400));

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxprice,
    totlaPrice,
  });
  await order.save();

  res.status(201).json({ success: true, order });
});

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
const getOrder = asyncHandler(async (req, res, next) => {
  const order = await (await Order.findById(req.params.id)).populate(
    'user',
    'name email'
  );
  if (!order)
    return next(
      new ErrorResponse(`Order not found with id of ${req.params.id}`, 404)
    );

  res.status(200).json({
    success: true,
    order,
  });
});

export { addOrderItems, getOrder };