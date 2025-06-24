FROM node:18

WORKDIR /app

# Copy just package.json (not the lock file)
COPY package.json ./

# Do a clean install with native Linux binaries
RUN npm install --force

# Now copy the source code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
