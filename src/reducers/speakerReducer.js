import { RECEIVE_SPEAKER } from '../frontend/actions/speakers_actions';

const speakerReducer = (state = "", action) => {
  switch (action.type) {
    case RECEIVE_SPEAKER:
      return action.payload.name;
    default: 
      return state;
  }
};

export default speakerReducer;