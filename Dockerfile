FROM node:14
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8888
CMD ["node", "server.js"]
