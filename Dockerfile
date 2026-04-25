# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application (Vite outputs to /dist)
RUN npm run build

# ── Stage 2: Run ────────────────────────────────────────────────────────────
FROM nginx:stable-alpine

# Copy the build output from Stage 1 to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080


CMD ["nginx", "-g", "daemon off;"]
