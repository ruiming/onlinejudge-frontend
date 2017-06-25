FROM node:latest
MAINTAINER Ruiming Zhuang <ruiming.zhuang@gmail.com>

ENV NGINX_VERSION 1.13.0-1~jessie

RUN curl -O -s http://obf68by4u.bkt.clouddn.com/nginx_signing.key && apt-key add nginx_signing.key && \ 
		echo 'deb http://nginx.org/packages/mainline/debian/ jessie nginx' >> /etc/apt/sources.list &&\ 
		echo 'deb-src http://nginx.org/packages/mainline/debian/ jessie nginx' >> /etc/apt/sources.list && rm nginx_signing.key
RUN apt-get update && apt-get install nginx=${NGINX_VERSION}

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock
RUN cd /tmp && NPM_CONFIG_LOGLEVEL=warn yarn install
COPY . /tmp
RUN cd /tmp && yarn run build
RUN rm -rf /usr/share/nginx/html && mv /tmp/dist /usr/share/nginx/html
COPY nginx-site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD nginx -g 'daemon off;'
