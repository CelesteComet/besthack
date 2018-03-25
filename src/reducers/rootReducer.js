import { combineReducers } from 'redux';
import speakerReducer from './speakerReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  speaker: speakerReducer,
  session: authReducer
});

export default rootReducer;


