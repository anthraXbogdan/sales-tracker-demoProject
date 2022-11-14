FROM nginx
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd

# For testing on local server comment the bellow line 'EXPOSE 80'
EXPOSE 80


