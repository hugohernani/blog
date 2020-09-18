#!/bin/bash

# /common/utils/dockerize -wait tcp://blog_api:${BLOG_API_APP_EXPOSED_PORT} -timeout 300s -wait-retry-interval 30s yarn start
yarn start
