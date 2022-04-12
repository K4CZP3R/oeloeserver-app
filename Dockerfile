FROM node:16-alpine AS build

WORKDIR /usr/src/app
COPY ./app/package.json ./app/package-lock.json ./
RUN npm install
COPY ./app .
RUN npm run build

FROM nginx:stable-alpine
COPY deployment/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html