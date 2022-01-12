FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install glob rimraf

# RUN npm install

RUN npm ci

COPY . .

COPY .env /usr/src/app/.env

RUN npm run build