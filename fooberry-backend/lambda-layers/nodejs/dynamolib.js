const process = require('process');
const AWS = require('aws-sdk');

const isTest = !! process.env['JEST_WORKER_ID'];
const isSAMLocal = !! process.env['AWS_SAM_LOCAL'];

function getDb() {
  if (isTest || isSAMLocal) {
    return new AWS.DynamoDB({
      apiVersion: "2012-08-10",
      endpoint: 'http://localhost:8000',
      sslEnabled: false,
      region: 'local-env'
    });
  } else {
    return new AWS.DynamoDB({
      apiVersion: "2012-08-10"
    });
  }
}
module.exports = { getDb };