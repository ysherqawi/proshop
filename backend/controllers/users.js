import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({ _id: { $ne: req.user._id } });
  res.status(200).json({ success: true, users });
});

export { getUsers };
