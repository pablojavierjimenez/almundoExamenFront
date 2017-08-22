# AlmundoFrontTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. `ng serve --prod`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----------------------------------------------

# almundoExamenFront
Examen front-end para almundo
[angular4 - expressjs4 -mongo](https://www.djamware.com/post/58e0d15280aca75cdc948e4e/building-chat-application-using-mean-stack-angular-4-and-socketio)

### Technology stack
- [express 4](http://expressjs.com/es/4x/api.html) - [tut](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
- [CORS](https://enable-cors.org/server_expressjs.html)
-[jeroku](https://devcenter.heroku.com/articles/mean-apps-restful-api)
-------------------------------------



Front End Start Application
===========================
- [Installation](#installation)
- [Develoment Tacks](#develoment-tacks)
  - [Run server](#run-server)
  - [Build](#build)
- [Design](#design)
- [Technology Stack](#technology-stack)
  - [NPM Dev dependencies](#npm-dev-dependencies)
  - [Naming & Selectors](#naming-&-selectors)


Installation
------------

- Prerequisites (see _[Technology Stack](#technology-stack)_):

    * [NodeJS with npm](https://nodejs.org/en/)
    * [angular-cli](https://nodejs.org/en/)
    * [Yarn](https://www.npmjs.com/package/yarn) also see [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm)

- Install:
    ```bash
    cd ~/Proyects
    git clone git@github.com:pablojavierjimenez/fesa.git
    cd fesa
    git checkout develop
    yarn
    ```




----

Technology Stack
---------------
```
$ npm install -g @angular/cli
```
```
$ npm install -g yarn
```









------------


package.json ( at moment of the start proyect)
```json
{
  "name": "almundo-front-test",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^4.2.4",
    "@angular/common": "^4.2.4",
    "@angular/compiler": "^4.2.4",
    "@angular/core": "^4.2.4",
    "@angular/forms": "^4.2.4",
    "@angular/http": "^4.2.4",
    "@angular/platform-browser": "^4.2.4",
    "@angular/platform-browser-dynamic": "^4.2.4",
    "@angular/router": "^4.2.4",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.2",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.3.1",
    "@angular/compiler-cli": "^4.2.4",
    "@angular/language-service": "^4.2.4",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "~3.1.1",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.3.2",
    "typescript": "~2.3.3"
  }
}
```
