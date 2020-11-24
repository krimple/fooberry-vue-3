const { v1 } = require('uuid');
const dynamolib = {
    getDocumentClient: () => {
        return {
            put: () => {
                return {
                    promise: () => { return Promise.resolve({}); }
                }
            }
        }
    }
};
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
it("should create a new game, completely mocking the external services", async () => {
    const { handler } = require('../index');
    // load lambda, which should trigger the fake layer and putItem method
    const result = await handler({
        newGameInfo: {
            gameId: v1(),
            name: 'FooBerry',
            rows: '10',
            cols: '10'
        }
    });
    expect(result).toBeDefined();
});
