FROM node:latest

WORKDIR .

COPY package*.json ./
COPY yarn.lock ./

WORKDIR ./backend

RUN yarn install

WORKDIR ./frontend

RUN yarn install

WORKDIR .

COPY . .

RUN yarn dev:start