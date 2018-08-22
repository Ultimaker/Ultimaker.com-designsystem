FROM alpine:3.6
LABEL maintainer="Ultimaker - Team Web <webdevelopment@ultimaker.com>"

EXPOSE 8080

RUN echo "http://mirror.leaseweb.com/alpine/v3.6/main" >> /etc/apk/repositories \
 && echo "http://mirror.leaseweb.com/alpine/v3.6/community" >> /etc/apk/repositories \
 && apk add --no-cache nginx tini

COPY docker/nginx/nginx.conf /etc/nginx

RUN rm /etc/nginx/conf.d/default.conf \
 && mkdir -p /var/www/html

COPY storybook-static /var/www/html

WORKDIR /var/www/html

ENTRYPOINT ["/sbin/tini", "-g"]
CMD ["nginx", "-g", "daemon off;"]
