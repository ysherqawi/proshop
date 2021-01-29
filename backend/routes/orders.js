import express from 'express';
import {
  addOrderItems,
  getOrder,
  updateOrderToPaid,
  getCurrentUserOrders,
} from '../controllers/orders.js';
import { protect } from '../middlewares/auth.js';

const router = express();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getCurrentUserOrders);
router.route('/:id').get(protect, getOrder);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
