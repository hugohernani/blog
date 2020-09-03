FROM node:12-alpine as base

ENV APP_HOME=/usr/src/app
ENV HOST_HOME=./packages/articles_frontend

WORKDIR $APP_HOME
EXPOSE 3000

COPY $HOST_HOME/package.json yarn.lock ./
COPY $HOST_HOME .

#production
#FROM base as production

#RUN yarn install --frozen-lockfile --ignore-scripts --production --ignore-optional

#CMD node index.js

# development
FROM base as dev

RUN yarn install --silent
RUN yarn global add react-scripts@3.4.3 --silent
RUN chmod +x init.sh

CMD /bin/sh ./init.sh
