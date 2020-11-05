#!/bin/bash
aws stepfunctions create-state-machine --definition {
  "Comment": "Game play in several states",
  "StartAt": "BeginPlay",
  "States": {
    "BeginPlay": {
      "Type": "Pass",
      "Result": "Hello",
      "Next": "GatherInputs"
    },
    "GatherInputs": {
      "Type": "Pass",
      "Result": "World",
      "Next": "UpdateWorld"
    },
    "UpdateWorld": {
      "Type": "Pass",
      "Result": "MovesMade",
      "Next": "EvaluateNextStep"
    },
    "EvaluateNextStep": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.gameOver",
          "NumericEquals": 1,
          "Next": "EndGame"
        },
        {
          "Variable": "$.gameOver",
          "NumericEquals": 0,
          "Next": "GatherInputs"
        }
      ]
    },
    "EndGame": {
      "Type": "Pass",
      "End": true
    }
  }
} --region us-east-1 --endpoint http://localhost:8083 --role-arn arn:aws:iam::012345678901:role/DummyRole --name demo
