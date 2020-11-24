const { getDocumentClient } = require("/opt/nodejs/dynamolib");
// const AWS = require('aws-sdk');
exports.handler = async event => {
  const { newGameInfo } = event;

  try {
    const db = getDocumentClient();
    // const db = new AWS.DynamoDB({ apiVersion: '2012-08-10'});
    const result = await db.put({ TableName: 'FooBerryGames',
      Item: {
          gameId: newGameInfo.gameId,
          name: newGameInfo.name,
          rows: newGameInfo.rows,
          cols: newGameInfo.cols
      }
    }).promise();

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

