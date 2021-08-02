
# Welcome to my Nest.js (Mongo, Mongoose) project for Selina HW!

[DEMO](https://selina-backend.herokuapp.com/)

## What was implemented:

- Create data model and database
- Create RESTful API services with endpoints supporting:
- Show list of Selina locations
- Show available room types for a specific location
- Create room booking
- Every location has 3 room types (Dorm, Private, Deluxe), with 10 rooms of each type
- Implement algorithm to determine room type availability
- Add some unit tests
- Added migration file for data initialization
- Deployed to Heroku

And also all bonus tasks:
- 1: support ordering & filtering the list of locations by country
- 2: create an API endpoint that shows the top 3 of locations based on the number
of rooms booked
- 3: imagine that a location also has a list of activities that are bookable (for
example: surf lesson, jungle trekking, etc), adjust the data model and API
accordingly (assume no limit in availability of an activity)

### API

# Locations
```https://selina-backend.herokuapp.com/locations``` - list of all locations

```https://selina-backend.herokuapp.com/locations?filter=Mexico``` - filter locations by country

```https://selina-backend.herokuapp.com/locations?sort=asc``` - sort locations by country

```https://selina-backend.herokuapp.com/locations/top-three``` - list of top 3 locations

```https://selina-backend.herokuapp.com/rooms``` - list of rooms

## Room types
```https://selina-backend.herokuapp.com/room-types``` - list of all room types

```https://selina-backend.herokuapp.com/room-types/available?locationID``` - list of available room types by location id


## Rooms
```https://selina-backend.herokuapp.com/rooms``` - list of available rooms by location id

```https://selina-backend.herokuapp.com/rooms/available?locationID``` - list of available rooms by location id

```https://selina-backend.herokuapp.com/rooms/:id``` - book room



## Activities
```https://selina-backend.herokuapp.com/activities``` - list of activities

```https://selina-backend.herokuapp.com/activities/:id``` - book activities

## Unit tests
Implemented unit test for Locations resource. Run ```npm run test locations.controller``` and ```npm run test locations.service``` to check tests.

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

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

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

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
