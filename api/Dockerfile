FROM node

WORKDIR /app/api

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD [ "node", "dist/main.js" ]