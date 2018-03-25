import { combineReducers } from 'redux';
import speakerReducer from './speakerReducer';

const rootReducer = combineReducers({
  speaker: speakerReducer
});

export default rootReducer;


