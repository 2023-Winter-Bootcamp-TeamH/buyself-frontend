FROM node:16.17.0

WORKDIR /frontend

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --legacy-peer-deps

COPY  . ./

EXPOSE 3000

CMD ["npm", "start"]