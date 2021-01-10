import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../actions/types';

export const userLoginReducer = (
  state = { loading: null, userInfo: null, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT:
      return { ...state, loading: false, userInfo: null, error: null };
    default:
      return state;
  }
};
export const userRegisterReducer = (
  state = { loading: null, userInfo: null, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: payload };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT:
      return { ...state, loading: false, userInfo: null, error: null };
    default:
      return state;
  }
};
