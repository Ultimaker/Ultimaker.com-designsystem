FROM eu.gcr.io/um-website-193311/ultimaker.com/node:latest

COPY /node_modules/ /var/www/html/node_modules/
COPY /server/ /var/www/html/server/
COPY /storybook-static/ /var/www/html/
COPY /server.js /var/www/html/server.js
COPY /package.json /var/www/html/package.json

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "-g", "--"]

CMD ["npm", "run", "start"]
