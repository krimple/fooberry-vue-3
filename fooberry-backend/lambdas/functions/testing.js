const {listBuckets} = require('/opt/nodejs/s3lib');
async function s3demo(event, ctx, callback) {
   console.log('stuff is gonna happen');
   const result = await listBuckets();
   console.log('got a result: ', result);
   callback(null, result);
};

module.exports = {s3demo};