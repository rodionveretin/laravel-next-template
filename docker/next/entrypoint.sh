#!/bin/sh

echo "Starting frontend with NODE_ENV=$NODE_ENV"

if [ "$NODE_ENV" = "development" ]; then
  echo "Running in development mode..."
  npm run dev
elif [ "$NODE_ENV" = "production" ]; then
  echo "Running in production mode..."
  npm run build
  if [ $? -ne 0 ]; then
    echo "Build failed, exiting..."
    exit 1
  fi
  npm start
else
  echo "Unknown NODE_ENV value: $NODE_ENV"
  exit 1
fi
