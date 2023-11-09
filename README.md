# comandos y pasos a seguir para ejecutar este proyecto
## ejcutar imagen de docker 
asegurarse de que exista el archivo docker-compose.yml y ejecutar el siguiente comando 

```bash
$ docker-compose up -d
```


## Instalacion
para la instalacion hay que reconstruir los paquetes de node

```bash
$ npm install
```

## Ejecutar la aplicacion 
utilizar cualquier de los siguientes comandos (preferentemente la opcion 2) 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).



## License

Nest is [MIT licensed](LICENSE).
