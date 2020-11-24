const { getDocumentClient } = require("/opt/nodejs/dynamolib");
const process = require("process");
const isTest = process.env.JEST_WORKER_ID;
exports.handler = async event => {
  const client = getDocumentClient();
  return await client.scan({ TableName: 'FooBerryGames', Limit: 10 }).promise();
};