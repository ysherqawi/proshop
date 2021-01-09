import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../actions/types';

export const userLoginReducer = (
  state = { loading: true, userInfo: {}, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state };
    case USER_LOGIN_SUCCESS:
      return { ...state, login: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { ...state, login: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
