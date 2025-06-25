# backend/Dockerfile
FROM node:18

WORKDIR /app

# Copy and install only once
COPY package*.json ./
RUN npm install

# Install prod + dev deps as needed
RUN npm install @azure/ai-projects @azure/identity multer axios
RUN npm install --save-dev ts-node typescript @types/node @types/multer @types/express @types/axios

# Copy rest of app code
COPY . .

# Run the TypeScript server with ts-node
CMD ["npx", "ts-node", "index.ts"]


# # backend/Dockerfile
# FROM node:18

# WORKDIR /app

# # Copy only package files first
# COPY package*.json ./

# # Install all deps, including multer and its types
# RUN npm install \
#  && npm install multer \
#  && npm install --save-dev @types/multer \
#  && npm install --save-dev @types/multer @types/axios \
#  && npm install @azure/ai-projects @azure/identity

# # Copy the rest of the code
# COPY . .

# CMD ["npx", "ts-node", "index.ts"]
