const { getDb } = require("/opt/nodejs/dynamolib");
exports.handler = async event => {
  const { newGameInfo } = event;

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
    ).promise();

    return {};
  } catch (e) {
    return e.toString();
  }
}

