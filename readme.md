# don't read, this isn't meant for you.

#networks -  containers can talk each others using containers name if they are on same network.
- docker network create <network name> - to create a network
- docker network ls - to list the networks


docker run -p 27017:27017 --network <network name>

# did?
 - with dockerfile built a image with basic express app 
    - that listens on 3000 and exposes port 8081
-  with docker compose 
    - span one mongo container
    - span one mongo-express container.
    - its exposes on port 3000 and provides a admin ui for the mongo database
- span a postgress container and connected with host.

