Front-End Test For Almundo.com
==============================
- [Installation](#installation)
- [After Proyect Installation](#after-proyect-installation)
  - [Run Project](#run-project)
  - [Build](#build)
- [Technology Stack](#technology-stack)
  - [NPM Dev dependencies](#npm-dev-dependencies)
----

Installation
------------
- Prerequisites (see _[Technology Stack](#technology-stack)_):
  * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [NodeJS with npm](https://nodejs.org/en/)
    _(at the moment of this proyect is created the node and npm versions are : **NodeJs** LTS v6.11.2, **NPM** v3.10.10)_
  * [angular-cli](https://cli.angular.io/)
  * [Yarn](https://www.npmjs.com/package/yarn) also see [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm)

- Go to your proyect folders
    ```bash
    cd ~/ProyectsPath
    ```
- Getting Proyect from remote repository
  ```bash
  git clone git@github.com:pablojavierjimenez/almundoExamenFront.git
  ```
- After the proyect is downloaded, we go into the proyect folder
  ```bash
  cd almundoExamenFront
  ```
- once there, swith to _develop_ branch
  ```bash
  git checkout develop
  ```
- And run Yarn Install
  ```bash
  yarn
  ```
----

After Proyect Installation
--------------------------
#### Run Project
For Development time `npm start` to build the project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. `ng serve --prod`
Technology Stack

#### Run express server API
**NOTE:** before rin the expressjs server, you must run `ng build` because expressjs need the _dist/_ folder to serve the statics files.

So to run The expressjs api execute the next command
```bash
  $ node server.js

 APP running on localhost:3000
 API running on localhost:3000/api

```
---------------

Technology stack
----------------
- Install [Angular CLI](https://cli.angular.io/) _(at the moment of this proyect is created the @angular/cli versions is **1.3.1**)_
  ```
  $ npm install -g @angular/cli

  $ ng -v
      _                      _                 ____ _     ___
     / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
    / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
   / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
  /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
  @angular/cli: 1.3.1
  node: 6.11.1
  ```
- Install [Yarn](https://www.npmjs.com/package/yarn) _(at the moment of this proyect is created the Yarn versions is **v0.27.5**)_
  ```
  $ npm install -g yarn

  $ yarn --version
  0.27.5
  ```
------------

### NPM Dev dependencies
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

