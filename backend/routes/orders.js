import express from 'express';
import { addOrderItems } from '../controllers/orders.js';
import { protect } from '../middlewares/auth.js';

const router = express();

router.route('/').post(protect, addOrderItems);

export default router;
