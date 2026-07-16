FROM node:20-alpine
WORKDIR /workspace
COPY package.json package-lock.json* ./
COPY .npmrc ./
RUN npm install
COPY . .
WORKDIR /workspace/apps/web
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
