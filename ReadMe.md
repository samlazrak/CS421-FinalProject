### DevResources

###### Project structure:

> - / - contains methods to run the server and client
> 
> - /frontend - contains the front end application
> 
> - /backend - contains the backend server

###### Frontend:

> Frontend is built with Angular and Apollo client.

###### Backend:

> Backend is built with Node.js, Express, Apollo, Typescript.

##### I have supplied a variety of methods to run the app for development:

###### Prereqs: ( Only one is needed )

> - Have node and yarn installed 
>   
>   - https://nodejs.org/en/
>   
>   - https://yarnpkg.com/lang/en/
> 
> - Have docker installed
>   
>   - https://www.docker.com/
> 
> - Have vagrant installed with virtualbox
>   
>   - https://www.virtualbox.org/
>   
>   - https://www.vagrantup.com/

###### Development env:

> - To run a local dev env run `yarn install && yarn dev` or `chmod +x install.sh` and `./install.sh`
> 
> - To run a vagrant dev env run `vagrant up`
> 
> - To run a docker dev env run `docker-compose up`
> 
> - To run a docker dev env without the database build a local docker image `docker image build .`
> 
> `navigate to localhost:4200` to view the angular front end
> 
> `navigate to localhost:3000/graphiql` to utilize graphql with graphiql manually
