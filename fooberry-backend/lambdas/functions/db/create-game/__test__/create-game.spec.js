const dynamolib = require('../../../../../lambda-layers/nodejs/dynamolib')
jest.doMock('/opt/nodejs/dynamolib', () => { return dynamolib; }, {virtual: true});

const createGame = require('../create-game');
const {v1} = require('uuid');

describe("create game API", () => {
  beforeEach(() => {});
  it("should create a new game", (done) => {
    const result = createGame({ 
        newGameInfo: {
          gameId: v1(),
          name: 'FooBerry',
          rows: '10',
          cols: '10'
        }
      },
      {},
      function(error, data) {
        console.log("callback triggered", error, JSON.stringify(data));
          if (error) {
            done.fail(error);
          } else {
            expect(data).toBeDefined();
            console.log(JSON.stringify(data));
            done();
          }
      }
      );
  });
});
