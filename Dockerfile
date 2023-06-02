FROM node:16.20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM node:16.20-alpine
WORKDIR /app
COPY --from=builder /app/.output .
ENV PORT=8081
CMD ["node", "./.output/server/index.mjs"]
EXPOSE 8081
