FROM node
WORKDIR /app/src
COPY . .
RUN npm ci
EXPOSE 3000
CMD [ "npm","run","dev" ]
