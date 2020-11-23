const { v1 } = require('uuid');
const dynamolib = {
    getDb: () => {
        return {
            putItem: () => {
                return {
                    promise: async () => {
                        return Promise.reject("I failed");
                    }
                }
            }
        }
    }
};
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });

it("createGame Lambda should fail properly", async () => {
    const { handler } = require('../index');

    // load lambda, which should trigger the fake layer and putItem method
    try {
        const result = await handler({
            newGameInfo: {
                gameId: v1(),
                name: 'FooBerry',
                rows: '10',
                cols: '10'
            }
        });
        throw new Error('test should have caused handler to fail'); ``
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.message).toContain('I failed');
    }
});