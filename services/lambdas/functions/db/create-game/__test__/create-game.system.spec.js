const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib');
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
const { handler } = require('../index');

describe("Use external, local DynamoDB", () => {
  it("should create a new game using local Dynamo", async () => {
    const result = await handler({
      newGameInfo: {
        gameId: v1(),
        name: 'FooBerry',
        rows: '10',
        cols: '10'
      }
    });
    expect(result).toBeDefined();
    expect(result.statusCode).toBe('201');
    expect(result.body.message).toBe('created');
  });

  it('should fail graceously', async () => {
    try {
      const result = await handler({
        // leave out PK - this will cause the actual DynamoDB engine to 
        // throw an exception for a missing key.
        newGameInfo: {
          name: 'FooBerry',
          rows: '10',
          cols: '10'
        }
      });
      throw new Error("test should have resulted in an error condition");
    } catch (e) {
      expect(e).toBeDefined();
      expect(e.message).toContain('ValidationException')
    }
  });
});
