const process = require('process');
const AWS = require('aws-sdk');
const { DocumentClient } = require('aws-sdk/clients/dynamodb');
const isTest = !! process.env['JEST_WORKER_ID'];
const isSAMLocal = !! process.env['AWS_SAM_LOCAL'];

function getDb() {
  if (isTest) {
    return new AWS.DynamoDB({
      apiVersion: "2012-08-10",
      endpoint: 'http://localhost:8000',
      sslEnabled: false,
      region: 'local-env'
    });
  } else if (isSAMLocal) {
    return new AWS.DynamoDB({
      apiVersion: "2012-08-10",
      endpoint: 'http://dynamodb:8000',
      sslEnabled: false,
      region: 'local-env'
    });
  } else {
     return new AWS.DynamoDB({
      apiVersion: "2012-08-10"
    });
  }
}

function getDocumentClient() {
   if (isTest) {
    return new DocumentClient({
      apiVersion: "2012-08-10",
      endpoint: 'http://localhost:8000',
      sslEnabled: false,
      convertEmptyValues: true,
      region: 'local-env'
    });
  } else if (isSAMLocal) {
    return new DocumentClient({
      apiVersion: "2012-08-10",
      endpoint: 'http://dynamodb:8000',
      sslEnabled: false,
      convertEmptyValues: true,
      region: 'local-env'
    });
  } else {
     return new DocumentClient({
      apiVersion: "2012-08-10",
      convertEmptyValues: true
    });
  }
}
module.exports = { getDb, getDocumentClient };