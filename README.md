# Express starter kit with postresql (sequelize) and docker

## Commands

Before all you need to run Docker

### Setup backend

Run postgres:
```bash
docker-compose up postgres
```

THEN in another terminal instance (at the moment):

#### Develop (localhost:9095)
```bash
docker-compose up dev
```
Wait until `Server started on port 8080. Enviroment: development` is appear

OR

#### Production (localhost:9090)
```bash
docker-compose up prod
```

OR

#### Test (migrations doing automatically)
```bash
docker-compose up test
```

------------------

#### ApiDoc
```bash
cd server && yarn run apidoc
```
