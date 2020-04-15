FROM node:lts-alpine

RUN npm config set unsafe-perm true

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["pm2-runtime", "server/index.js"]