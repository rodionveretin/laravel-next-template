FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

RUN apk update && apk add --no-cache \
    curl \
    libpng-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    supervisor

RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    gd \
    zip

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

USER root
RUN chmod 777 -R /var/www/html

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD []
