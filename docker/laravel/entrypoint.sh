#!/bin/sh
set -e

docker-php-entrypoint "$@"

exec supervisord -c /etc/supervisor/conf.d/supervisord.conf
