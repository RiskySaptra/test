FROM node:lts-alpine3.14

ENV PORT 4000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/

RUN npm install -g npm@latest
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 4000

# Running the app
CMD "npm" "run" "dev"