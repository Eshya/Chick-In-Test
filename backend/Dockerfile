FROM node:17.2.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci 

COPY . ./
RUN npm install
EXPOSE 3000 5000 

CMD ["npm", "run", "prod"]
