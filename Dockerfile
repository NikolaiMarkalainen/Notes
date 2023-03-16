FROM node:16

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY . .

RUN npm install

RUN npm run build

CMD npm run dev