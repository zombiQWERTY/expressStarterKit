FROM mhart/alpine-node:6

MAINTAINER Pavel Zinovev zombiqwerty@yandex.ru

ENV workdir /home/apps/expressStarterKit
WORKDIR ${workdir}

COPY ./package.json ${workdir}/package.json
COPY ./src ${workdir}/src
COPY ./test ${workdir}/test
COPY ./bin ${workdir}/bin

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
    echo "http://dl-3.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
    echo "http://dl-4.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \
    echo "http://dl-5.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories; \

    apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    rm -rf /var/cache/apk/* && \

    npm install -g nodemon yarn sequelize-cli forever

EXPOSE 8080/tcp
