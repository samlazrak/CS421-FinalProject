#!/bin/bash
cd "$(dirname "$0")"

yarn install

yarn dev:preinstall
yarn dev:install
yarn dev:start