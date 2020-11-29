#!/bin/bash
# assumes installation of uuid tool (on my OS it is uuid/focal in apt-install)

aws stepfunctions --endpoint http://localhost:8083 start-execution --state-machine arn:aws:states:us-east-1:123456789012:stateMachine:demo --name `uuid`
