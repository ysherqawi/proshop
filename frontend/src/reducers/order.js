import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../actions/types';

export const orderCreateReducer = (
  state = { loading: null, order: {}, success: null, error: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, order: payload };
    case ORDER_CREATE_FAIL:
      return { ...state, loading: false, success: false, error: payload };
    default:
      return state;
  }
};
