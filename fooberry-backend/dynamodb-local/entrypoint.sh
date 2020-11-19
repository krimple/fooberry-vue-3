#!/bin/bash

# For development only! Local Dynamo container w/schema

# If needed, we can customize / deploy workflows
set -m
export AWS_REGION=us-east-1
export AWS_ACCESS_KEY_ID=foo
export AWS_SECRET_ACCESS_KEY=bar

# Invoke Dynamo in the bg
ulimit -c unlimited

java -Djava.library.path=./DynamoDBLocal_lib/ -jar DynamoDBLocal.jar --sharedDb --inMemory &
echo 'DynamoDB running'
sleep 4
aws dynamodb --region region-local --endpoint-url http://localhost:8000 create-table --table-name FooBerryGames --attribute-definitions AttributeName=gameId,AttributeType=S --key-schema AttributeName=gameId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
jobs
fg %%