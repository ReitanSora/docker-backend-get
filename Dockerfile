FROM node:22-alpine3.20

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 5001

CMD [ "sh", "-c", "npx prisma migrate deploy && node dist/main.js" ]