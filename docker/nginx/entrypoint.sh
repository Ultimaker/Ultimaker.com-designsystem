#!/usr/bin/env sh

if [ -z "$PROXY_PASS" ]; then
  >&2 echo "No PROXY_PASS set"
  exit 1
fi

sed -e "s/{PROXY_PASS}/${PROXY_PASS}/" \
  /etc/nginx/conf.d/storybook.conf.dist | tee /etc/nginx/conf.d/storybook.conf

exec "$@"
