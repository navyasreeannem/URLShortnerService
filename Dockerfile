# Use Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy backend package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY backend/ ./

# Copy frontend folder to root
COPY frontend/ /frontend


# Expose port
EXPOSE 5000

# Run the server
CMD ["node", "server.js"]
