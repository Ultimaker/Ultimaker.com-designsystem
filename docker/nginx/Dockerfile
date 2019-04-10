FROM eu.gcr.io/um-website-193311/ultimaker.com/nginx:latest

COPY /docker/nginx/storybook.conf /etc/nginx/conf.d/storybook.conf.dist
COPY /docker/nginx/entrypoint.sh /etc/nginx/entrypoint.sh
COPY /storybook-static/ /var/www/html/

ENTRYPOINT ["/sbin/tini", "-g", "--", "/etc/nginx/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
