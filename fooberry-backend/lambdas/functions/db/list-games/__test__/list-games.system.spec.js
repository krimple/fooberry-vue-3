const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib');
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
const handler = require('../index').handler;

describe('List Games tests', () => {
    let ids = [];
    // before all = seed data
    beforeEach(async() => {
        documentClient = dynamolib.getDocumentClient();
        for (let i = 0; i < 10; i++) {
            const key = v1().toString();
            await documentClient.put({ 
                TableName: 'FooBerryGames', 
                Item: {
                    gameId: key,
                    name: 'Game ' + i,
                    rows: '10',
                    cols: '10'
                }
            }).promise();
            // keep track of keys (to delete later if the dynamo server is shared or not torn down)
            ids.push(key);
        }
    });

    it('gets a list successfully', async () => {
        const results = await handler();
        expect(results.Items.length).toBe(10);
    });

    afterEach(async () => {
        const client = dynamolib.getDocumentClient();
        for (let i = 0; i < 10; i++) {
            await client.delete({ TableName: 'FooBerryGames', Key: {
                gameId: ids[i] 
            }}).promise();
        }
    });
});