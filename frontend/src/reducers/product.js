import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
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

export const productCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, product: payload };
    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
