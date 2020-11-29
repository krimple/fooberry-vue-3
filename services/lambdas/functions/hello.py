import os
import boto3
from botocore.exceptions import ClientError
import sys

def handler(event, context):
    s3_client = boto3.client('s3', endpoint_url=os.environ.get('S3_ENDPOINT_URL'))

    try:
        response = s3_client.list_buckets()
    except ClientError as e:
        print (e.message)
        sys.exit(0)

    buckets = ''
    for bucket in response['Buckets']:
        print (bucket['Name'])
        buckets = buckets + bucket['Name'] + '\n'

    return buckets
