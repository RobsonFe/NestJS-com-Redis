<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição
Neste Projeto desenvolvo uma aplicação em NestJS onde lida com uma grande quantidade de requisições e consegue por meio do Redis, ter uma performance. 

## Tecnologias 

- NestJS
- Redis
- Prisma
- SQLite
- Docker

## Instalação

- Para criar o projeto: 

```bash
$ nest new cache
```

- Instale as seguintes dependências no projeto.

```bash
npm install -D prisma 
npm install tsx
npm install @faker-js/faker
npm install @prisma/client
npx prisma init --datasource-provider SQLite
```
Você conseguirá instalar o prisma no modo de desenvolvimento, configuração do projeto para TypeScript, Dados falsos gerados pelo FakerJS para popular o banco de dados, o prisma no modo cliente e por ultimo o banco de dados da aplicação, no qual é o SQLite.

- Execute as migrations

```bash
npx prisma migrate dev 
```

- Crie os dados falsos após configurar o arquivo `seed.ts`

 ```bash
npx prisma db seed
```
- Instale o Redis

```bash
npm install ioredis
```

## Execute a Aplicação.

```bash
npm run start
```
## Execute o container Docker com o banco de dados Redis

```bash
docker run -d --name redis -p 6379:6379 redis
```

## Documentação

- [NestJS](https://docs.nestjs.com)
- [Prisma](https://www.prisma.io/docs)
- [Docker](https://docs.docker.com)
- [Redis](https://github.com/luin/ioredis)

## Endpoint

```bash
http://localhost:3000/users
```

## Imagens 

Antes do Redis

- Observe que mesmo usando o SQLite que é um banco de dados leve para testes, retornou 30 segundos os dados do cliente.
 
   <a href="https://imgur.com/ptPrpoN" target="_blank"><img src="https://i.imgur.com/ptPrpoN.jpg" title="source: imgur.com" /></a>

Depois do Redis

- Observe que reduziu o tempo de resposta para 5 segundos. 

<a href="https://imgur.com/ujwgBjQ" target="_blank"><img src="https://i.imgur.com/ujwgBjQ.jpg" title="source: imgur.com" /></a>

Requisição no Banco de Dados 

- A Requisição primeiro vai no banco e só depois lida com o cache para melhorar o desempenho do site.

<a href="https://imgur.com/rBZRjUZ" target="_blank"><img src="https://i.imgur.com/rBZRjUZ.jpg" title="source: imgur.com" /></a>

## License

[MIT licensed](LICENSE).
