FROM node:10.15-alpine

RUN apk add --update --no-cache tini \
 && apk add --update --no-cache --virtual .build-deps bash git openssh-client

WORKDIR /var/www/html

COPY /server/ /var/www/html/server/
COPY /storybook-static/ /var/www/html/
COPY /package.json /var/www/html/package.json
COPY /package-lock.json /var/www/html/package-lock.json
COPY /server.js /var/www/html/server.js

RUN npm install --production \
 && apk del .build-deps

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "-g", "--"]

CMD ["npm", "run", "start"]
