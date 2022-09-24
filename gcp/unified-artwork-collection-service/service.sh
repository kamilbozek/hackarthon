#!/bin/bash

REGION="europe-west1"

gcloud functions deploy getArtwork \
--runtime=nodejs16 \
--region=$REGION \
--source=. \
--entry-point=getArtwork \
--trigger-http \
--allow-unauthenticated