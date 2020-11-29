const faker = require("faker");
const jsonfile = require("jsonfile");

const numGames = 10;

const games = [];

faker.seed(13434);

for (let i = 0; i < numGames; i++) {
  const id = faker.random.uuid();
  const gameInfo = {
    game_id: id,
    name: faker.lorem.words(4).replace(/ /g, "-"),
    rows: faker.random.number({
      min: 4,
      max: 10,
    }),
    cols: faker.random.number({
      min: 5,
      max: 10,
    }),
    players: {
      alwaysThere: {
        name: "I am always in here",
        strength: 100,
        position: {
          row: 4,
          col: 4,
        },
      },
    },
  };

  for (let j = 0; j < 4; j++) {
    console.log(gameInfo);
    gameInfo.players[faker.internet.userName()] = {
      name: faker.internet.userName(),
      strength: faker.random.number({ min: 1, max: 100 }),
      position: {
        row: faker.random.number({
          min: 1,
          max: gameInfo.rows,
        }),
        col: faker.random.number({
          min: 1,
          max: gameInfo.cols,
        }),
      },
    };
  }
  games.push(gameInfo);
}

jsonfile.writeFileSync("Games.json", games, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("completed random gen");
  }
});
