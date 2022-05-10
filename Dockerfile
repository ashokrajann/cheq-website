FROM node:17.9-alpine

#Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

#Install dependencies
COPY package.json .
RUN npm install

#Copy the app (Note .dockerignore)
COPY . .

#Build the app
RUN npm run build

#Expose PORT on container
EXPOSE 80

#Start app
CMD ["npm", "start"]
