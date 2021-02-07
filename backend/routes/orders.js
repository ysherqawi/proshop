import express from 'express';
import {
  addOrderItems,
  getOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
  getCurrentUserOrders,
  getOrders,
} from '../controllers/orders.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express();

router.route('/').post(protect, addOrderItems).get(protect, isAdmin, getOrders);
router.route('/myorders').get(protect, getCurrentUserOrders);
router.route('/:id').get(protect, getOrder);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, isAdmin, updateOrderToDelivered);

export default router;
