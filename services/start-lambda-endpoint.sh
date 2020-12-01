#!/bin/sh

sam local start-lambda --docker-network awsimulacrum --template aws/lambdas-and-layers.yml
