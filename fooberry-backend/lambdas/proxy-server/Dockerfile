FROM nginx:stable-alpine
COPY ./lambdas/proxy-server/default.conf /etc/nginx/conf.d/
EXPOSE 8080/tcp
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /usr/share/nginx/html