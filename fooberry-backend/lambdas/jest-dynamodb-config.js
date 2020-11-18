module.exports = {
    tables: [
        {
        TableName: `FooBerryGames`,
        KeySchema: [{AttributeName: 'gameId', KeyType: 'HASH'}],
        AttributeDefinitions: [{AttributeName: 'gameId', AttributeType: 'S'}],
        ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
        },
        // etc
    ]
};