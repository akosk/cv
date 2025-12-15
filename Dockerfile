FROM ghcr.io/railwayapp/function-bun:1.3.0

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install

COPY . .

ENV NODE_ENV=production
CMD ["bun", "run", "start"]
