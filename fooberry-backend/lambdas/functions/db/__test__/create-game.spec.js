const createGame = require('../create-game');
const uuid = require('uuid');

describe("create game API", () => {
  beforeEach(() => {});
  it("should create a new game", (done) => {
    const result = createGame({ 
        newGameInfo: {
          gameId: uuid(),
          name: 'FooBerry',
          rows: '10',
          cols: '10'
        }
      },
      {},
      function(error, data) {
        console.log("callback triggered", error, data);
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
