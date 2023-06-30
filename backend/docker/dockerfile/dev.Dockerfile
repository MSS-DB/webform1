FROM node:18

WORKDIR /backend

COPY backend /backend

RUN npm install --legacy-peer-deps


EXPOSE 8000

CMD ["npm", "run", "dev"]
