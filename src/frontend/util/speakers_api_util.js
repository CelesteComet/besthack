const $ = require('jquery');

export const fetchSpeaker = () =>
  // fetches the one, only speaker in the table 
  $.ajax({
    url: "https://data.absolve11.hasura-app.io/v1/query",
    contentType: "application/json",
    data: JSON.stringify({
        "type": "select",
        "args": {
              "table": "speakers",
              "columns": [
                    "name"
              ]
        }
    }),
    type: "POST",
    dataType: "json"
  });


//   {
//     "type": "update",
//     "args": {
//         "table": "speaker",
//         "where": {
//             "id": {
//                 "$eq": "1"
//             }
//         },
//         "$set": {
//             "name": "adawd"
//         },
//         "returning": [
//             "name"
//         ]
//     }
// }

  export const updateSpeaker = speakerId =>
  // fetches the one, only speaker in the table 
  $.ajax({
    url: "https://data.absolve11.hasura-app.io/v1/query",
    contentType: "application/json",
    data: JSON.stringify({
      "type": "update",
      "args": {
          "table": "speakers",
          "where": {
              "id": {
                  "$eq": "1"
              }
          },
          "$set": {
              "name": speakerId
          },
          "returning": [
              "name"
          ]
      }
    }),
    type: "POST",
    dataType: "json"
  });

