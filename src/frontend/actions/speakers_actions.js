import * as SpeakersApiUtil from "../util/speakers_api_util";

export const RECEIVE_SPEAKER = "RECEIVE_SPEAKER";

export const fetchSpeaker = () => dispatch =>
  SpeakersApiUtil.fetchSpeaker();
    // .then(payload => dispatch(receiveSpeaker(payload)))
    // .fail((xhr, status, errorThrown) => {
    //   console.log("Error: " + errorThrown);
    //   console.log("Status: " + status);
    //   console.dir(xhr);
    // });

export const updateSpeaker = () => dispatch =>
  SpeakersApiUtil.updateSpeaker()
    .then(payload => dispatch(receiveSpeaker(payload)))
    .fail((xhr, status, errorThrown) => {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });

const receiveSpeaker = payload => ({
  type: RECEIVE_SPEAKER,
  payload
});