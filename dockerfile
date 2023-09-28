FROM node:18.12.0

# Defina o diretório de trabalho no contêiner
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY . ./

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
