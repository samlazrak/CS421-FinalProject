#!/bin/bash
cd "$(dirname "$0")"

nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/index.ts