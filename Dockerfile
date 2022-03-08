FROM node:16.13.0 AS base

WORKDIR /app

ENV SKIP_PREFLIGHT_CHECK=true

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]