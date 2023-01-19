# TypingChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Bulma.css Styles

Run `npm install bulma`

## Faker.js

Run `npm install faker@5.5.3`
Run `npm install @types/faker@5.5.9`

## Additional Documentation

A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:

https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

npm install @faker-js/faker

You'll then need to update your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support

## higlight methods

To convert String of enteredText to an array.

```
  <p class="has-text-centered">
        <span [class]="comparedText(letter, enteredText[i])" *ngFor="let letter of randomText.split(''); let i = index">({{enteredText[i]}}{{letter}})</span>
      </p>
```

Medthod to compare enteredText and randomText by a single letter

````comparedText(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter? 'correct' : 'incorrect';
  }   ```
````

## styling methods

Add the style to the Css file in different colors

```.pendint {
    color: gray;
    ;
}

.correct {
    color: green;

}

.incorrect {
    color: red;
    font-weight: bold;
}
```
