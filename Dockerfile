FROM node:20-alpine

WORKDIR /app

# pnpm support
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

# Prisma needs this at build time
RUN pnpm prisma generate

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
