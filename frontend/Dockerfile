FROM node:16 AS build-stage

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
