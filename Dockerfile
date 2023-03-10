FROM node:16

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY . .

RUN npm install

CMD npm run dev