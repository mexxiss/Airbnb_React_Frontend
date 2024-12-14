FROM node:20-alpine as build

# Declare the build time environment variables
ARG VITE_GOOGLE_API_KEY
ARG VITE_LIVE_API_URL
ARG VITE_LOCAL_API_URL

# Set default values for environment variables
ENV VITE_GOOGLE_API_KEY=$VITE_GOOGLE_API_KEY
ENV VITE_LIVE_API_URL=$VITE_LIVE_API_URL
ENV VITE_LOCAL_API_URL=$VITE_LOCAL_API_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Server with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]