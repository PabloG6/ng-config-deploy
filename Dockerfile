FROM node:14-alpine as build

WORKDIR /usr/local/app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /usr/local/app/dist/nginx-deploy-config /usr/share/nginx/html
