# Food24by7web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Firebase Init
on initializing the project you’ll be asked a few questions:

Firebase CLI : Hosting.

Public directory: dist/food24by7web

Configure as single-page app: Yes

Overwrite index.html: No.

## Firebase deploy
Before starting the deploy, do make sure that firebase.json have these two keys in hosting

"site": "food24by7",

"public": "dist/food24by7web",

then run below command

firebase deploy --only hosting:food24by7



hot angular picks
Infinite Scroll Using the CDK
Reactive Forms
Template-Driven Forms
HttpClient
Angular Universal
Drag & Drop Using the CDK
PWAs in Angular
latest angular posts
Component Communication in Angular
Custom Form Validation in Angular
Building Maps in Angular using Leaflet, Part 4: The Shape Service
Building Maps in Angular using Leaflet, Part 3: The Popup Service
all angular posts
follow us 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
