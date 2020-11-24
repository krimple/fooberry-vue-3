const { getDocumentClient } = require("/opt/nodejs/dynamolib");
const process = require("process");
const isTest = process.env.JEST_WORKER_ID;
exports.handler = async event => {
  const { gameId } = event;
  const client = getDocumentClient();
  const row = await client.get({ TableName: 'FooBerryGames', Key: { gameId: gameId }}).promise();
  return row.Item;
};