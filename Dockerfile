# Use official Node.js image as the base image
FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Build the Vue app
RUN npm run build

# Expose the port your app runs on
EXPOSE 80

# Define the command to run your app
CMD ["npm", "run", "serve"]
