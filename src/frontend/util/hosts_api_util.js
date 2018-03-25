const $ = require('jquery');

export const fetchHost = () =>
  // fetches the one, only host in the table 
  $.ajax({
    url: "https://data.absolve11.hasura-app.io/v1/query",
    contentType: "application/json",
    data: JSON.stringify({
        "type": "select",
        "args": {
              "table": "hosts",
              "columns": [
                    "name"
              ]
        }
    }),
    type: "POST",
    dataType: "json"
  });
