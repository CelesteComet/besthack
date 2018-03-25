import { RECEIVE_MESSAGE, RECEIVE_ALL_MESSAGES } from '../frontend/actions/messages_actions';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      console.log(action.payload);
      let newState = Object.assign([], state);
      return newState.concat(action.payload);
    case RECEIVE_ALL_MESSAGES:
      return action.payload;
    default: 
      return state;
  }
};

export default messagesReducer;