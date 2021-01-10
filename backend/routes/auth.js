import express from 'express';
import {
  register,
  login,
  getUserProfile,
  updateUserProfile,
} from '../controllers/auth.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
