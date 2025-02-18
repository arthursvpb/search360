FROM node:20.15.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force && npm install --force && npm install @nestjs/cli -g
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
