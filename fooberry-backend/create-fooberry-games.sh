aws dynamodb --endpoint-url http://localhost:8000 create-table --table-name FooBerryGames --attribute-definitions AttributeName=gameId,AttributeType=S --key-schema AttributeName=gameId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
