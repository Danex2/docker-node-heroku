FROM  node:10-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

COPY . .

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]