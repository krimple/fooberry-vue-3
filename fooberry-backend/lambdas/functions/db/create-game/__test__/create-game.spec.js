const { v1 } = require('uuid');
const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib')
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, { virtual: true });
const handler = require('../index').handler;
 
 describe("create game API", () => {

  describe("Mock everything but the Lambda", () => {
    // the fake method for putting an item to DynamoDB
    // just resolve a promise
    let putItemMock = jest.fn(() => {
      // it returns an object
      return new Promise({});
    });

    beforeEach(() => {
      // now fake its import out to emulate the Lambda layer
      // and make a fake putItem method
      jest.spyOn(dynamolib, 'getDb').mockImplementation({
          putItem: putItemMock
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
