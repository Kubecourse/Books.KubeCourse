FROM node:alpine

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package.json /src/
COPY package-lock.json /src/

RUN npm install

# Bundle app source
ADD . /src

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run serve" ]