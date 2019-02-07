#!/usr/bin/env sh

if [ -z "$PROXY_PASS" ]; then
  echo "No PROXY_PASS set"
  exit 1
fi

sed -e "s/{PROXY_PASS}/${PROXY_PASS}/" /etc/nginx/nginx.conf.dist \
 | tee /etc/nginx/nginx.conf

exec "$@"
