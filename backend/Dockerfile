FROM node:20

RUN npm i -g pnpm

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "start:dev"]