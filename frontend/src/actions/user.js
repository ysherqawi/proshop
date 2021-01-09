import axios from 'axios';

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = axios.post('/api/auth/login', { email, password }, confog);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
