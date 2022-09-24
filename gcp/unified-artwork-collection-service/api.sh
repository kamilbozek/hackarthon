#!/bin/bash

PROJECT_ID="hackarthon-zacheta"
GATEWAY_ID="artwork-api-gateway"
API_ID="artwork-api"
API_CONFIG_ID="artwork-api-config-v1"
GCP_REGION="europe-west1"

# Create the API 
gcloud api-gateway apis create $API_ID --project=$PROJECT_ID


#gcloud api-gateway apis describe artwork-api --project=hackarthon-zacheta

# createTime: '2022-09-23T21:25:56.203204408Z'
# displayName: artwork-api
# managedService: artwork-api-0avxcx79ki3hp.apigateway.hackarthon-zacheta.cloud.goog
# name: projects/hackarthon-zacheta/locations/global/apis/artwork-api
# state: ACTIVE
# updateTime: '2022-09-23T21:27:34.771167122Z'


# Create service account for invoking service Cloud Functions
gcloud iam service-accounts create artwork-api-invoker \
    --description="artwork-api-invoker" \
    --display-name="artwork-api-invoker"

SERVICE_ACCOUNT="artwork-api-invoker@hackarthon-zacheta.iam.gserviceaccount.com"

# Configure the service account
gcloud iam service-accounts add-iam-policy-binding $SERVICE_ACCOUNT \
  --member user:kamil.bozek@gmail.com \
  --role roles/iam.serviceAccountUser

# configure the API using the OpenAPI spec
gcloud api-gateway api-configs create artwork-api-config-v1 \
  --api=$API_ID --openapi-spec=artwork-api-config.yaml \
  --project=$PROJECT_ID --backend-auth-service-account=$SERVICE_ACCOUNT



# Check details
# gcloud api-gateway api-configs describe artwork-api-config-v1 \
#   --api=artwork-api --project=hackarthon-zacheta

# createTime: '2022-09-23T22:15:42.039041376Z'
# displayName: artwork-api-config-v1
# gatewayServiceAccount: projects/-/serviceAccounts/artwork-api-invoker@hackarthon-zacheta.iam.gserviceaccount.com
# name: projects/934907066932/locations/global/apis/artwork-api/configs/artwork-api-config-v1
# serviceConfigId: artwork-api-config-v1-061c1wp8qfzpj
# state: ACTIVE
# updateTime: '2022-09-23T22:18:23.813209834Z'


gcloud services enable artwork-api-0avxcx79ki3hp.apigateway.hackarthon-zacheta.cloud.goog


# Create a Gateway
gcloud api-gateway gateways create $GATEWAY_ID \
  --api=$API_ID --api-config=$API_CONFIG_ID \
  --location=$GCP_REGION --project=$PROJECT_ID


# Gateway details
# gcloud api-gateway gateways describe $GATEWAY_ID \
#   --location=$GCP_REGION --project=$PROJECT_ID

# apiConfig: projects/934907066932/locations/global/apis/artwork-api/configs/artwork-api-config-v1
# createTime: '2022-09-23T22:26:03.615796859Z'
# defaultHostname: artwork-api-gateway-bxhnj1o4.ew.gateway.dev
# displayName: artwork-api-gateway
# name: projects/hackarthon-zacheta/locations/europe-west1/gateways/artwork-api-gateway
# state: ACTIVE
# updateTime: '2022-09-23T22:32:36.936218101Z'