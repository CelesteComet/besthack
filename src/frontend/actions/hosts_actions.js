import * as HostsApiUtil from "../util/hosts_api_util";

export const RECEIVE_HOST = "RECEIVE_HOST";

export const fetchHost = () => dispatch =>
  HostsApiUtil.fetchHost()
    .then(payload => dispatch(receiveHost(payload)))
    .fail((xhr, status, errorThrown) => {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });

const receiveHost = payload => ({
  type: RECEIVE_HOST,
  payload
});