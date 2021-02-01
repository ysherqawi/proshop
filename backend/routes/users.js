import express from 'express';
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/users.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express();

router.route('/').get(protect, isAdmin, getUsers);
router
  .route('/:id')
  .get(protect, isAdmin, getUser)
  .put(protect, isAdmin, updateUser)
  .delete(protect, isAdmin, deleteUser);

export default router;
