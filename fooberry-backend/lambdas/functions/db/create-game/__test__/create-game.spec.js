const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib')
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, {virtual: true});

const {handler} = require('../index');
const {v1} = require('uuid');

describe("create game API", () => {
  beforeEach(() => {});
  it("should create a new game", async () => {
    const result = await handler({ 
        newGameInfo: {
          gameId: v1(),
          name: 'FooBerry',
          rows: '10',
          cols: '10'
        }
      });
      console.log(JSON.stringify(result));
      expect(result).toBeDefined();
  });
});
