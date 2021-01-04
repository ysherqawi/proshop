import axios from 'axios';
import { CART_ADD_ITEM } from './types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {
    data: { product },
  } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
