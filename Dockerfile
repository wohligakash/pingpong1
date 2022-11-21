FROM node
WORKDIR /
COPY package.json /
COPY package-lock.json /
RUN npm install
COPY . .
EXPOSE 4001
CMD ["node","index.js"]
