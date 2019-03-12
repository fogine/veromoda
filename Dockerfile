FROM lucidservices/node:current-alpine

WORKDIR /app

# Order of execution matters - prevents unnecessary cache invalidation
COPY package.json .

#For what environment the dependencies will be builded for.
#Eg. if NODE_ENV=production, no devDependencies are included
ARG NODE_ENV=development

# Prepare the env for building native dependencies
# This will NOT increase final docker image size as additional dependencies
# are removed after npm install
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python findutils postgresql-dev && \
  apk add --no-cache perl-dbd-pg postgresql-client && \
  NODE_ENV=$NODE_ENV && \
  yarn install --quiet --no-optional && \
  yarn cache clean --force && \
  apk del native-deps

RUN ln -s /app/node_modules/.bin/serviser /bin/serviser

COPY . .

ENV PUB_PORT=3001 INTERNAL_PORT=3002 CLI_PORT=3003 DOCS_PORT=3004 INTERNAL_DOCS_PORT=3005
EXPOSE $PUB_PORT $INTERNAL_PORT $CLI_PORT $DOCS_PORT $INTERNAL_DOCS_PORT
CMD npm start
