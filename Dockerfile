FROM node

ARG PORT
ENV PORT=${PORT:-3000}
EXPOSE $PORT

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
