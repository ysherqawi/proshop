import express from 'express';
import { getUsers } from '../controllers/users.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express();

router.route('/').get(protect, isAdmin, getUsers);

export default router;
