FROM node:23-alpine AS base
WORKDIR /app
COPY . .
RUN npm ci

FROM base AS builder
RUN npm run build

FROM node:23-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static .next/static
EXPOSE 3000
CMD ["node", "server.js"]
