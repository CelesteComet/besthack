// import keys from '../keys';

// var API_KEY = keys['TOKBOX_API_KEY'];
// var SECRET = keys['TOKBOX_SECRET'];

// var OpenTok = require('opentok'),
//     opentok = new OpenTok(API_KEY, SECRET);

export function handler(event, context, callback) {

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, EVERYONE AT"})
  })
}
