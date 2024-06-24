# Use an official Node.js, and it should be version 16 and above

FROM node:alpine3.20

# Set the working directory in the container

WORKDIR /app

# Copy package.json and pnpm-lock.yaml

COPY pnpm-lock.yaml package*.json ./

# Install app dependencies using PNPM

RUN npm install -g pnpm

# Install dependencies

RUN pnpm i

# Copy the application code

COPY . .

COPY ./dist ./dist

# Start the application

CMD ["pnpm","run", "start:dev"]