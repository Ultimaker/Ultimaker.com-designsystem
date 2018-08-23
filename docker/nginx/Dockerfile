FROM alpine:3.6
LABEL maintainer="Ultimaker - Team Web <webdevelopment@ultimaker.com>"

EXPOSE 8080

RUN echo "http://mirror.leaseweb.com/alpine/v3.6/main" >> /etc/apk/repositories \
 && echo "http://mirror.leaseweb.com/alpine/v3.6/community" >> /etc/apk/repositories \
 && apk add --no-cache nginx tini

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf.dist

RUN rm /etc/nginx/conf.d/default.conf \
 && mkdir -p /var/www/html

COPY storybook-static /var/www/html
COPY docker/nginx/entrypoint.sh /etc/nginx/entrypoint.sh
RUN chown 777 /etc/nginx/entrypoint.sh

WORKDIR /var/www/html

ENTRYPOINT ["/sbin/tini", "-g", "--", "/etc/nginx/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
