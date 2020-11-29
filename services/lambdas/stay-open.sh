#!/bin/bash
# requres entr - on macos: `brew install entr`
docker run --rm \
  -e DOCKER_LAMBDA_STAY_OPEN=1 \
  -p 9001:9001 \
  -v `echo $PWD`:/var/task:ro,delegated \
  lambci/lambda:python3.8 \
  functions/hello.handler