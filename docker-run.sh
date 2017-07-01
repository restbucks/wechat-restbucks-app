#!/usr/bin/env bash -ex

docker run \
    --name restbucks-nginx-wechatstore \
    -it --rm \
    -p 80:80 \
    -v $(PWD)/build:/usr/share/nginx/html:ro \
    -v $(PWD)/nginx/conf.d:/etc/nginx/conf.d:rw \
    nginx:1.11.4-alpine