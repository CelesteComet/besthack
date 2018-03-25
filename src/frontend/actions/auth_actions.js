export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = name => {
  return {
    type: SET_CURRENT_USER,
    payload: { currentUser: name }
  }  
};