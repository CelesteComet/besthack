export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_TOKEN = "SET_TOKEN";

export const setCurrentUser = name => {
  return {
    type: SET_CURRENT_USER,
    payload: { currentUser: name }
  }  
};

export const setToken = token => {
  return {
    type: SET_TOKEN,
    payload: { token }
  }
}