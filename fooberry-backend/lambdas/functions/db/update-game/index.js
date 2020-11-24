const { getDocumentClient } = require("/opt/nodejs/dynamolib");
const process = require("process");
const isTest = process.env.JEST_WORKER_ID;
exports.handler = async event => {
  const { updatedGameInfo } = event;

  try {
    const db = getDocumentClient();
    const result = await db.put({
        TableName: "FooBerryGames",
        Item: {
          // TODO - review... do I need this??
          // assume ID is the same - maybe don't need this
          // function at all given it is an update of a row
          // with a hash so semantically it's the same call,
          // but updates a row rather than creates a new one
          gameId: updatedGameInfo.gameId,
          name: updatedGameInfo.name,
          rows: updatedGameInfo.rows,
          cols: updatedGameInfo.cols
        },
      }).promise();

      return {
        statusCode: '204',
        body: {
          message: 'no content'
        }
      };
    } catch (e) {
      throw new Error(e);
    }
}

