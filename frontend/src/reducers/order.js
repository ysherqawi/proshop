import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_USER_REQUEST,
  ORDER_LIST_USER_SUCCESS,
  ORDER_LIST_USER_FAIL,
  ORDER_LIST_USER_RESET,
} from '../actions/types';

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, order: payload };
    case ORDER_CREATE_FAIL:
      return { ...state, loading: false, success: false, error: payload };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = {
    loading: true,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, order: payload };
    case ORDER_DETAILS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_PAY_REQUEST:
      return { ...state, loading: true };
    case ORDER_PAY_SUCCESS:
      return { ...state, loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { ...state, loading: false, error: payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListUserReducer = (state = { orders: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_LIST_USER_REQUEST:
      return { ...state, loading: true };
    case ORDER_LIST_USER_SUCCESS:
      return { ...state, loading: false, orders: payload };
    case ORDER_LIST_USER_FAIL:
      return { ...state, loading: false, error: payload };
    case ORDER_LIST_USER_RESET:
      return { orders: [] };
    default:
      return state;
  }
};
