
export const fetchMessages = () => 
  $.ajax({
    url: "https://data.absolve11.hasura-app.io/v1/query",
    contentType: "application/json",
    data: JSON.stringify({
      "type": "select",
      "args": {
        "table": "messages",
          "columns": [
            "*"
          ]
        }
      }),
      type: "POST",
      dataType: "json"
  });

export const createMessage = (authorName, body) => 
  $.ajax({
    url: "https://data.absolve11.hasura-app.io/v1/query",
    contentType: "application/json",
    data: JSON.stringify({
      "type": "insert",
      "args": {
        "table": "messages",
        "objects": [
            {
              "author_name": `${authorName}`,
              "body": `${body}`
            }
        ]
      }
    }),
    type: "POST",
    dataType: "json"
  });

