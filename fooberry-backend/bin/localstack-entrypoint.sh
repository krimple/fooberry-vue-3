#!/usr/bin/env bash
printf "Configuring localstack components..."

readonly LOCALSTACK_URL=http://localstack:4566

sleep 5;

set -x

aws configure set aws_access_key_id foo
aws configure set aws_secret_access_key bar
echo "[default]" > ~/.aws/config
echo "region = us-east-1" >> ~/.aws/config
echo "output = json" >> ~/.aws/config

aws --endpoint-url=$LOCALSTACK_URL s3 mb s3://kendemo-s3-bucket
aws --endpoint-url=$LOCALSTACK_URL s3 cp /tmp/configs/state-machine/gameplay_definition.json s3://kendemo-s3-bucket/
aws --endpoint-url=$LOCALSTACK_URL s3 cp /tmp/configs/appsync/gamefile.schema s3://kendemo-s3-bucket/

set +x
