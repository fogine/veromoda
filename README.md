- run locally

> docker-compose up

- run in development mode

Execute [serviser-docker.sh](https://github.com/lucid-services/serviser-tools/blob/master/serviser-docker.sh) in project root.  
You will be dropped in to containers shell, then run: 

```bash
> npm run migrate
> npm run seed # if you want to populate database with dummy data 
> npm start
```

Your projects directory on your host system will be linked with the running container so you can modify files on your host filesystem
