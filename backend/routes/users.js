import express from 'express';
import { getUsers, deleteUser } from '../controllers/users.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express();

router.route('/').get(protect, isAdmin, getUsers);
router.route('/:id').delete(protect, isAdmin, deleteUser);

export default router;
