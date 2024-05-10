// authReducer.js

const initialState = {
    isAuthenticated: false,
    user: {},
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  