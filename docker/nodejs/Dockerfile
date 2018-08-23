FROM node:8.11.3-alpine
LABEL maintainer="Ultimaker - Team Web <webdevelopment@ultimaker.com>"

EXPOSE 8080

RUN echo "http://mirror.leaseweb.com/alpine/v3.6/main" >> /etc/apk/repositories \
 && echo "http://mirror.leaseweb.com/alpine/v3.6/community" >> /etc/apk/repositories \
 && apk add --no-cache tini \
 && apk add --no-cache --virtual .build-deps bash git openssh-client

COPY ./package.json /var/www/html/package.json
COPY ./package-lock.json /var/www/html/package-lock.json

RUN npm install --production \
 && apk del .build-deps

COPY ./server /var/www/html/server
COPY ./server.js /var/www/html/server.js
COPY storybook-static /var/www/html

WORKDIR /var/www/html

ENTRYPOINT ["/sbin/tini", "-g", "--"]
CMD ["npm", "run", "start"]
