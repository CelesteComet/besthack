const axios = require('axios');
const OpenTok = require('opentok');
require('dotenv').config();

const tokbox_key = process.env.TOKBOX_API_KEY;
const tokbox_secret = process.env.TOKBOX_SECRET;



export function handler(event, context, callback) {


  //This opens a way for us to interact with tokbox's api
  var opentok = new OpenTok(tokbox_key, tokbox_secret);
  opentok.createSession(function(err, session) {
    if (err) {
      return console.log(err);
    } else{

      callback(null, {
      statusCode: 200,
      body: JSON.stringify({payload: session.sessionId})
      });

    }

    });
}
