FROM node:10.15-alpine

LABEL maintainer="Ultimaker - Team Web <webdevelopment@ultimaker.com>"

EXPOSE 8080

RUN apk add --update --no-cache tini \
 && apk add --update --no-cache --virtual .build-deps bash git openssh-client

WORKDIR /var/www/html

COPY ./package.json /var/www/html/package.json
COPY ./package-lock.json /var/www/html/package-lock.json

COPY ./server /var/www/html/server
COPY ./server.js /var/www/html/server.js
COPY storybook-static /var/www/html

RUN npm install --production \
 && apk del .build-deps

ENTRYPOINT ["/sbin/tini", "-g", "--"]
CMD ["npm", "run", "start"]
