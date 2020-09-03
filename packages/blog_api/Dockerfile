FROM node:12-alpine as base

ENV APP_HOME=/usr/src/app
ENV HOST_HOME=./packages/articles_api

WORKDIR $APP_HOME
EXPOSE 3001

COPY $HOST_HOME/package.json yarn.lock ./

RUN yarn install --silent

COPY $HOST_HOME .

# development
FROM base as dev
ENV NODE_ENV=development

RUN apk add --no-cache openssl

RUN chmod +x init.sh

CMD /bin/sh ./init.sh
