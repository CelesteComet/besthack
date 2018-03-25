import * as SpeakersApiUtil from "../util/speakers_api_util";

export const RECEIVE_SPEAKER = "RECEIVE_SPEAKER";

export const fetchSpeaker = () => dispatch =>
  SpeakersApiUtil.fetchSpeaker()
    .then(payload => dispatch(receiveSpeaker(payload[0])))
    .fail((xhr, status, errorThrown) => {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });

export const updateSpeaker = speakerId => dispatch => {
  return SpeakersApiUtil.updateSpeaker(speakerId)
    .then(payload => dispatch(receiveSpeaker(payload.returning[0])))
    .fail((xhr, status, errorThrown) => {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });
}

const receiveSpeaker = payload => {
  console.log(payload)

  return {
    type: RECEIVE_SPEAKER,
    payload
  };
};

