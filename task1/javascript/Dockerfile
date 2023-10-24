FROM node:21

ARG APP_DIR=/app

WORKDIR ${APP_DIR}

COPY . .
RUN npm ci

ENV PORT=5000
ENV INSTANCE_NAME=Application1
ENV INSTANCE_HASH=nfsdohfnsdiofn

RUN apt update && apt install -y curl

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl -s -f http://localhost:${PORT}/healthz || exit 1

EXPOSE ${PORT}
    
ENTRYPOINT node main.js