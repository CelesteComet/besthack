const axios = require('axios');
const OpenTok = require('opentok');
require('dotenv').config();

const tokbox_key = process.env.TOKBOX_API_KEY;
const tokbox_secret = process.env.TOKBOX_SECRET;



// Lambda functions are just regular functions, except that can be called using RESTful API endpoints. For instance, inside any random component during the lifecycle method componentWillMount, you could 'activate' a lambda function by passing in an API endpoint, such as axios.get('/.netifly/functions/foo'). A http request is made to a hosted server (in this case hosted on Netifly), the request activates the lambda function and the function proceeds normally. At the end, the function returns whatever is specified.

//TLDR, lambda functions are essentially hosted functions. A common usage for them is to abstract away API keys. Another benefit is that it makes your application more 'light-weight', since you essentially have a serverless back-end.


// This example below is a Lambda function. It returns a session object created from the opentok library.



export function handler(event, context, callback) {



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
