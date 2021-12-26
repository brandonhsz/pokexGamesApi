FROM node:16.13.0
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .

CMD ["yarn", "start"]