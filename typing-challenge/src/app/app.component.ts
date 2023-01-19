import { Component } from '@angular/core';
import {faker} from '@faker-js/faker';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing-challenge';

  randomText = lorem.sentence();
  randomLetter = '';
  enteredLetter = '';

  enteredText =''; //used for input text to match with randomText

  onInput (value: string){
    this.enteredText = value;
  }
  comparedText(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter? 'correct' : 'incorrect';
  }

}

  



