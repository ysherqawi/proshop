import express from 'express';

import {
  getProducts,
  getProduct,
  deleteProduct,
} from '../controllers/products.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProduct).delete(protect, isAdmin, deleteProduct);

export default router;
