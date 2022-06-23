# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

This project serves as a front end app for Rock Paper Scissors game. 

Player chooses a hand by clicking on web browser and a GET request with parameter is sent to backend application which returns the response game(computer hand + game result). 

Configure <API_URL> parameter in environment.ts or environment.prod.ts for the backend destination. For instance, set it to 'http://localhost:8080/game' for Java Spring Boot App running locally on port 8080.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
