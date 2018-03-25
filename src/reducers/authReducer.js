import { SET_CURRENT_USER } from '../frontend/actions/auth_actions';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default: 
      return state;
  }
};

export default authReducer;