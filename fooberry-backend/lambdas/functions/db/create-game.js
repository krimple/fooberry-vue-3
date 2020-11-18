const { getDb } = require("/opt/nodejs/dynamolib");
const process = require("process");
const isTest = process.env.JEST_WORKER_ID;
function createGame(event, ctx, callback) {
  const { newGameInfo } = event;

  // TODO verify
  console.log(`Params: ${JSON.stringify(event)}`);

  try {
    const db = getDb();
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
