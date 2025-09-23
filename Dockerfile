FROM node:23-alpine AS base
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install

FROM base AS builder
RUN pnpm run build

FROM node:23-alpine AS runner
RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static .next/static
EXPOSE 3000
CMD ["node", "server.js"]
