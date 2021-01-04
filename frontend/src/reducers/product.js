import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../actions/types';

export const productListReducer = (
  state = {
    products: [],
    loading: true,
    error: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, products: payload, loading: false };
    case PRODUCT_LIST_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = {
    product: { reviews: [] },
    loading: true,
    error: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, product: payload, loading: false };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
