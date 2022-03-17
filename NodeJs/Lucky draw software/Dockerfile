FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm cache verify
RUN npm ci
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm","start"]
