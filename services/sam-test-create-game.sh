#!/bin/sh

sam local invoke -e aws/events/create-game.json --docker-network awsimulacrum --template aws/lambdas-and-layers.yml create-game-lambda
