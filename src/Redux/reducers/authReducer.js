// authReducer.js
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_USER_ROLE } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  userRole: '', // 'user' or 'admin'
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userRole: action.payload.userRole,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        userRole: '',
      };
    case SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload.userRole,
      };
    default:
      return state;
  }
};

export default authReducer;
