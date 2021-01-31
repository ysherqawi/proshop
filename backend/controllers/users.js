import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({ _id: { $ne: req.user._id } });
  res.status(200).json({ success: true, users });
});

// @desc    Get  user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new ErrorResponse('User not found', 404));

  await user.remove();

  res.status(200).json({ success: true, message: 'User removed!' });
});

export { getUsers, deleteUser };
