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

  export const updateSpeaker = () =>
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
          }
      }
    }),
    type: "POST",
    dataType: "json"
  });

