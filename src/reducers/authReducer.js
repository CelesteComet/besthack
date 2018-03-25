import { SET_CURRENT_USER, SET_TOKEN } from '../frontend/actions/auth_actions';

const authReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_CURRENT_USER:
      newState.currentUser = action.payload
      return newState;
    case SET_TOKEN: 
      newState.token = action.payload
      return newState;
    default: 
      return state;
  }
};

export default authReducer;