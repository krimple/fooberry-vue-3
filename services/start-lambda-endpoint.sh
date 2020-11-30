#!/bin/sh

sam local start-lambda --docker-network awsimulacrum --template lambdas-and-layers.yml
