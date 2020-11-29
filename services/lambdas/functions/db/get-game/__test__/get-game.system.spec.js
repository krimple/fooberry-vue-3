const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib');
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
const getHandler = require('../index').handler;
const insertHandler = require('../../create-game/index').handler;

describe('Get Single Game tests', () => {
    let testRowId = v1();
    beforeEach(async () => {
        documentClient = dynamolib.getDocumentClient();
        // create seed row
        await insertHandler({
            newGameInfo: {
                gameId: testRowId,
                name: 'Test game',
                rows: '10',
                cols: '10'
            }
        });
    });

    it('fetches valid game successfully', async () => {
        const row = await getHandler({ gameId: testRowId });

        expect(row.gameId).toBe(testRowId);
        expect(row.name).toBe('Test game');
        expect(row.rows).toBe('10');
        expect(row.cols).toBe('10');
    });

    // TODO - test error condition

    afterEach(async () => {
        await dynamolib.getDocumentClient().delete({ TableName: 'FooBerryGames', Key: {
            gameId: testRowId
        }}).promise();
    });
        


});