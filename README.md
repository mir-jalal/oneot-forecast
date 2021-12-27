# 1oT Demo Task

## Docker 

If you want to run the whole project in Docker you can run docker-compose:
```shell
docker-compose up -d 
```
> If you want to build project by yourself you can follow the steps below

## Backend - Java Spring

You can build and run backend by following command: 
```shell
cd ./backend
./gradlew build
./gradlew bootRun
```

> You might need to set JAVA_HOME to run backend

## Frontend - React

You can build and run frontend by following command:
```shell
npm install
npm install react-scripts@3.4.1 -g
npm start 
```
