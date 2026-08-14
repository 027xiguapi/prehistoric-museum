# Optional containerized deployment of the Next.js museum server.
#
#   docker build -t prehistoric-animal-museum .
#   docker run -p 4173:4173 prehistoric-animal-museum
#
# The default basePath is /museum (override with MUSEUM_BASE_PATH at build
# time). Local review mode is serve-only and never enters the image.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/app ./app
COPY --from=build /app/src ./src
COPY --from=build /app/scripts ./scripts
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/proxy.ts ./proxy.ts
COPY --from=build /app/tsconfig.json ./tsconfig.json
EXPOSE 4173
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "4173"]
