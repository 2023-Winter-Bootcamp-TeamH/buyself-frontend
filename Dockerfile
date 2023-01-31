FROM node:16.17.0
USER root

WORKDIR /buyself-frontend
COPY . /buyself-frontend

COPY ./package.json ./
COPY ./package-lock.json ./

COPY . ./

RUN npm run build

EXPOSE 3000