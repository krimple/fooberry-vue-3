const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib')
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
// const AWS = require('aws-sdk');
const { handler } = require('../index');
 
 describe("create game API", () => {

  xdescribe("Mock everything but the Lambda", () => {
    let putItemMock;
    beforeEach(() => {
      jest.createMockFromModule('aws-sdk');
      AWS.DynamoDB = jest.fn().mockImplementation(() => {
        return {
          putItem: jest.fn(() => {
            return {
              promise: () => { return Promise.resolve({}); }
            };
          })
        };
      });
    });

    it("should create a new game, completely mocking the external services", async () => {
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
  });

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
    });
  });
});
