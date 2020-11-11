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

RUN ls -l /stepfns

ENTRYPOINT ["/stepfns/entrypoint.sh"]

