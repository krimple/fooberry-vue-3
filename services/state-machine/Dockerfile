# Created this dockerfile to allow me to install workflows on container startup
# for Docker-based local development
#
# This way the workflow is initialized for testing in a ci env or local dev
#
# Built in ../docker-compose.yml using `docker build`

FROM amazon/aws-stepfunctions-local as stepfns

FROM openjdk:8-alpine

# Add AWS cli
RUN apk add --no-cache python3 py3-pip && pip3 install --upgrade pip && pip3 install awscli && rm -rf /var/cache/apk/*

# Add Bash
RUN apk add bash

RUN mkdir -p /stepfns

WORKDIR /stepfns

COPY --from=stepfns /stepfns/* ./

COPY state-machine/bin/entrypoint.sh entrypoint.sh

RUN chmod a+x /stepfns/entrypoint.sh

ENTRYPOINT ["/stepfns/entrypoint.sh"]

