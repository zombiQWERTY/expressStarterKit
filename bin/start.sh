#!/usr/bin/env bash

(rimraf ./dist)
(yarn run compile)
(NODE_ENV=production forever ./forever.json)
