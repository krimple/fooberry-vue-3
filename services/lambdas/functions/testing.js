const { listBuckets } = require("/opt/nodejs/s3lib");
async function s3demo(event, ctx, callback) {
  console.log(JSON.stringify(event), JSON.stringify(ctx));
  const result = await listBuckets();
  callback(null, result);
}

module.exports = { s3demo };
