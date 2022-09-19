FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#RUN npm install -g n
#RUN n install 16.0.0
RUN npm install express --save
COPY . .
EXPOSE 3000
RUN node server.js
#CMD ["npm","start]"