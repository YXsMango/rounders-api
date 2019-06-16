FROM library/node:8.12-alpine

ENV NODE_ENV=production

# Add dependencies
RUN apk update && apk add --no-cache bash git

# Add OSS build deps for native libraries
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g

# create working directory
WORKDIR /src/app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm i --only=production
RUN npm install -g pm2@latest

# Symlink node to non root user space
RUN ln -s /usr/bin/nodejs /usr/sbin/node

# remove some build bloat
RUN apk del native-deps

# Create non root user
RUN addgroup -S dockergroup && adduser -S docker -G dockergroup
COPY --chown=docker:dockergroup . ./

EXPOSE 3000

# Run process as docker user
USER docker

# Start Application
CMD ["pm2-runtime", "start", "process.yml"]
