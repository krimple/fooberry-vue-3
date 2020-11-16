const AWS = require("aws-sdk");
const process = require("process");

function createGame(event, ctx, callback) {
  const db = new AWS.DynamoDB({
    apiVersion: "2012-08-10",
    endpoint: "http://localhost:8000",
    region: "us-east-1",
  });

  const { newGameInfo } = event;

  // TODO verify
  console.log(`Params: ${JSON.stringify(event)}`);

  try {
    db.putItem(
      {
        TableName: "FooBerryGames",
        Item: {
          gameId: { S: newGameInfo.gameId },
          name: { S: newGameInfo.name },
          rows: { N: newGameInfo.rows },
          cols: { N: newGameInfo.cols },
        },
      },
      (err, data) => {
        console.log(`callback called Error: ${err} data: ${data}`);
        if (err) {
          callback(err, null);
        } else {
          callback(null, err);
        }
      }
    );
  } catch (e) {
    callback(e, null);
  }
}

module.exports = createGame;
