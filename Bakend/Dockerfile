FROM node:18-alpine

WORKDIR /app

# Install dependencies (use npm ci if package-lock.json present)
COPY package*.json ./
RUN npm ci --only=production || npm install --production

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
