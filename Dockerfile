FROM node:22-bullseye-slim AS builder

WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build static site
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runner

# Serve the static build with nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
