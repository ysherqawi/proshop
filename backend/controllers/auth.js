import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/User.js';

// @desc    Auth user & get token
// @route   POST api/auth/login
// @access  Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorResponse('Please provide an email and password', 400));

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password)))
    return next(new ErrorResponse('Invalid credentials', 401));

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: null,
  });
});

export { login };
