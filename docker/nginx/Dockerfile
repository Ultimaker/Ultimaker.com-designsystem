FROM alpine:3.9

LABEL maintainer="Ultimaker - Team Web <webdevelopment@ultimaker.com>"

EXPOSE 8080

RUN apk add --update --no-cache nginx tini

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf.dist

RUN rm -rf /etc/nginx/conf.d \
 && mkdir -p /var/www/html

COPY storybook-static /var/www/html
COPY docker/nginx/entrypoint.sh /etc/nginx/entrypoint.sh

RUN chown 777 /etc/nginx/entrypoint.sh \
 && chmod +x /etc/nginx/entrypoint.sh

WORKDIR /var/www/html

ENTRYPOINT ["/sbin/tini", "-g", "--", "/etc/nginx/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
