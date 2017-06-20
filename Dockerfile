FROM node:8.1.2

MAINTAINER Cristian Greco <cristianrgreco@gmail.com>

WORKDIR /src

COPY . .

RUN npm i
