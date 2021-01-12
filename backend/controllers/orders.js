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

export { addOrderItems };
