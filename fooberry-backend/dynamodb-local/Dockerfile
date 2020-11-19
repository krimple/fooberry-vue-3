FROM amazon/dynamodb-local as dynamodb

# TODO - alpine + whatever we need to keep size down? Maybe. It's for dev so meh
FROM amazoncorretto:15

RUN cat /etc/passwd 

RUN mkdir -p /dynamodblocal

WORKDIR /dynamodblocal 

COPY dynamodb-local/entrypoint.sh /dynamodblocal/entrypoint.sh

# RUN chown -R www-data /dynamodblocal

RUN chmod u+x /dynamodblocal/entrypoint.sh

RUN yum update -y

RUN yum install -y python3 && python3 -m pip install --upgrade pip && pip install awscli

# USER www-data 

COPY --from=dynamodb /home/dynamodblocal/ ./ 

ENTRYPOINT ["/dynamodblocal/entrypoint.sh"]