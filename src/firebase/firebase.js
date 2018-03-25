import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDbzHvG5ILjBGsM3B8lg1grQbfykQx8LDw",
  databaseURL: "https://town-hall-reactathon.firebaseio.com"
};
firebase.initializeApp(config);

export default firebase;
