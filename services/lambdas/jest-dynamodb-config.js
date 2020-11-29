module.exports = {
    tables: [
        {
        TableName: `FooBerryGames`,
        KeySchema: [{AttributeName: 'gameId', KeyType: 'HASH'}],
        AttributeDefinitions: [{AttributeName: 'gameId', AttributeType: 'S'}],
        ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
        },
        // etc
    ],
    // keep it from colliding with Docker instance for real system tests
    port: 40888
};