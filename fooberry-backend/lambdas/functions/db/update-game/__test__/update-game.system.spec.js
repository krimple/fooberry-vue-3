const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib');
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
const updateHandler = require('../index').handler;
const insertHandler = require('../../create-game/index').handler;

describe('Update Game tests', () => {

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

    it('updates successfully', async () => {
        await updateHandler({
            updatedGameInfo: {
                gameId: testRowId,
                name: 'Updated Game',
                rows: '50',
                cols: '60'
            }
        });

        const updatedRow = await dynamolib.getDocumentClient().get({ TableName: 'FooBerryGames', Key: { gameId:  testRowId }}).promise();

        expect(updatedRow.Item.gameId).toBe(testRowId);
        expect(updatedRow.Item.name).toBe('Updated Game');
        expect(updatedRow.Item.rows).toBe('50');
        expect(updatedRow.Item.cols).toBe('60');
    });

    afterEach(async () => {
        await dynamolib.getDocumentClient().delete({ TableName: 'FooBerryGames', Key: {
            gameId: testRowId
        }}).promise();
    });
        


});