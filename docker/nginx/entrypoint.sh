#!/usr/bin/env sh

if [ -z "$NODEJS_SERVER" ]; then
    echo "No NODEJS_SERVER set"
    exit 1
fi

sed -e "s/{nodejs_server}/${NODEJS_SERVER}/" \
    /etc/nginx/nginx.conf.dist | \
    tee /etc/nginx/nginx.conf

exec "$@"
