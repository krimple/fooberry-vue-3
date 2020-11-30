#!/bin/sh

sam local invoke -e events/create-game.json --docker-network awsimulacrum --template lambdas-and-layers.yml create-game-lambda
