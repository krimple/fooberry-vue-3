const { getDocumentClient } = require("/opt/nodejs/dynamolib");
// const AWS = require('aws-sdk');
exports.handler = async event => {
  const { newGameInfo } = event;

  try {
    const db = getDocumentClient();
    // this is a new row
    const result = await db.put({ TableName: 'FooBerryGames',
      Item: {
         // new ID = new row
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

