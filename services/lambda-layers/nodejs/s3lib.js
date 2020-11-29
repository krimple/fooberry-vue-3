const AWS = require("aws-sdk");
const process = require("process");

async function listBuckets() {
  const s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    endpoint: process.env["S3_ENDPOINT_URL"],
    credentials: {
      /* TODO: should not need this in production Lambda (due to IAM role/policies) */
      accessKeyId: "aaa",
      secretAccessKey: "bbb",
    },
  });
  return new Promise(async (resolve, reject) => {
    s3.listBuckets((err, data) => {
      if (err) {
        reject(err);
      }

      const bucketList = [];
      for (let bucket of data.Buckets) {
        bucketList.push(bucket.Name);
      }

      const result = bucketList.join(", ");

      console.log(`result obtained: ${result}`);
      resolve(result);
    });
  });
}

module.exports = {
  listBuckets,
};
