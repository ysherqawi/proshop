import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Product name is Required'],
    },
    image: {
      type: String,
      required: [true, 'Product image is Required'],
    },
    brand: {
      type: String,
      required: [true, 'Product brand is Required'],
    },
    category: {
      type: String,
      required: [true, 'Product category is Required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is Required'],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: [true, 'Product rating is Required'],
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Product price is Required'],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, 'Product countInStock is Required'],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
