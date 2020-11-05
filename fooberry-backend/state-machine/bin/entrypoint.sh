#!/bin/bash
set -m
export AWS_REGION=us-east-1
export AWS_ACCESS_KEY_ID=foo
export AWS_SECRET_ACCESS_KEY=bar
java -jar StepFunctionsLocal.jar &
bg &&
echo 'I am running'
sleep 4
cat /tmp/workflows/gameplay_definition.json
aws stepfunctions create-state-machine \
  --definition "`cat /tmp/workflows/gameplay_definition.json`" \
  --region $AWS_REGION --endpoint http://localhost:8083 \
  --role-arn arn:aws:iam::012345678901:role/DummyRole --name demo
jobs
fg %%