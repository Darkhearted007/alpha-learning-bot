FROM node:22-bookworm

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

CMD ["node", "dist/index.js"]
