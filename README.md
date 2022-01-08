To build docker-img : 
command : docker image build -t my-node-img .

To build docker-img with given Version : 
command : docker image build -t my-node-img:1.0.0 .

List out the img : 
command : docker image ls 
<!-- or --> 
docker images

<!-- Container -->

Create New Container and run that img : 
command : docker container run my-node-img

List out the container (only for running container) : 
command : docker container ls

To see All docker container : 
command : docker container ls -a

Start Container : 
command : docker container start (id)

To Enter Docker Shell : 
command : docker exec -it (id) sh

To Stop the the docker container : 
command : docker container stop (id)
<!-- or -->
docker container kill (id)

To change the container name which is generate by docker : 
command :  docker container run -d --name c1 my-node-img

docker logs : 
command : docker logs (container-name)

Stop the Container : 
command : docker container stop (container-name)

Port Map : 
command : docker container run -d -p 5000:5000  --name c2 my-node-img

Remove Stop Containers : 
command : docker container prune

Remove Dagreling img (Inuse img ❌ not) : 
command : docker image prune

To clean All workstation : 
command : docker system prune


To share docker ing with friend with docker hub :
First to create a account on docker hub. 
<!-- or -->
command : docker image build -t taha1999/sample-app:1.0.0 .
login : command : docker login

push to docker hub : 
command : docker push taha1999/sample-app:tagname
<!-- or -->
docker push taha1999/sample-app:1.0.0

To Pull the repository of docker hub : 
command : docker pull taha1999/sample-app:1.0.0


<!-- Docker compose  -->
<!-- which is used for automation in docker  or multiple container application  -->

First create docker yml file outside the working dir : 
filename : docker-compose.yaml
then : 
command : docker-compose up 
<!-- or for run in background -->
command : docker-compose up -d

to see the container in docker-compose : 
command : docker-compose ps

to stop and delete thee container in docker-compose : 
command : docker-compose down 

Only build the img in docker-compose : 
command : docker-compose build

<!-- for production -->
Docker for production : 
command: docker-compose -f (file-name) docker-compose.prod.yaml up -d

