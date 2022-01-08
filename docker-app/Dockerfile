# starting point 
FROM node:16-alpine
# navigate to dockerimg /app/
WORKDIR /app
# if any changes I done in code build the only code part not npm i again do 
COPY package.json .
# genearte node_modules
RUN npm install
# movie file local to docker img
COPY . .
# Port map local to container 
EXPOSE 5000
# Start the Server on docker
CMD ["npm","run","dev"]
