const { getDb } = require("/opt/nodejs/dynamolib");
// const AWS = require('aws-sdk');
exports.handler = async event => {
  const { newGameInfo } = event;

  try {
    const db = getDb();
    // const db = new AWS.DynamoDB({ apiVersion: '2012-08-10'});
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

    return {
      statusCode: '201',
      body: {
        message: 'created'
      }
    };
  } catch (e) {
    throw new Error(e);
  }
}

