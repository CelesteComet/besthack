import { combineReducers } from 'redux';
import speakerReducer from './speakerReducer';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  speaker: speakerReducer,
  session: authReducer,
  messages: messagesReducer
});

export default rootReducer;


