# backend/Dockerfile
FROM node:18

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install all deps, including multer and its types
RUN npm install \
 && npm install multer \
 && npm install --save-dev @types/multer \
 && npm install --save-dev @types/multer @types/axios

# Copy the rest of the code
COPY . .

CMD ["npx", "ts-node", "index.ts"]
