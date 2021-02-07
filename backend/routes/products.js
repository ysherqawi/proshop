import express from 'express';

import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/products.js';
import { protect, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, isAdmin, updateProduct)
  .delete(protect, isAdmin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;
