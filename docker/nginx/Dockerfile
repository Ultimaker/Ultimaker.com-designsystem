FROM alpine:3.9

RUN apk add --no-cache nginx tini

RUN rm -rf /etc/nginx/conf.d

COPY /docker/nginx/nginx.conf /etc/nginx/nginx.conf.dist
COPY /docker/nginx/entrypoint.sh /etc/nginx/entrypoint.sh
COPY /storybook-static/ /var/www/html/

WORKDIR /var/www/html

EXPOSE 8080

STOPSIGNAL SIGQUIT

ENTRYPOINT ["/sbin/tini", "-g", "--", "/etc/nginx/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
