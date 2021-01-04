import axios from 'axios';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from './types';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      data: { products },
    } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
