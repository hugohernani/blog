#!/bin/bash

/usr/common/utils/dockerize -wait tcp://blog_api_database:${TYPEORM_PORT} -timeout 300s -wait-retry-interval 3s yarn start:dev
