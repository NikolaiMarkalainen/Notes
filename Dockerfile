FROM node:16

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY . .

EXPOSE 5000

RUN npm install

CMD npm run dev