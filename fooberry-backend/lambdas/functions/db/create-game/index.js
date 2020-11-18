const { getDb } = require("/opt/nodejs/dynamolib");
const process = require("process");
const isTest = process.env.JEST_WORKER_ID;
exports.handler = async event => {
  const { newGameInfo } = event;

  // TODO verify
  console.log(`Params: ${JSON.stringify(event)}`);

  try {
    const db = getDb();
    const result = await db.putItem(
      {
        TableName: "FooBerryGames",
        Item: {
          gameId: { S: newGameInfo.gameId },
          name: { S: newGameInfo.name },
          rows: { N: newGameInfo.rows },
          cols: { N: newGameInfo.cols },
        },
      },
    ).promise();;
    console.log('putItem result', result);

    return {};
  } catch (e) {
    return e.toString();
  }
}

