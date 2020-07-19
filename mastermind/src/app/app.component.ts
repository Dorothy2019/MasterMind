import { Component } from '@angular/core';
import { Guess } from './models/guess';
import { PegColor } from './models/peg-color';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastermind';
  guesses: Guess[];
  currentGuess: PegColor[];
  possibleValues: PegColor[] = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];

  constructor() {
    this.initGame();
  }

  initGame() {
    this.guesses = [];
    this.currentGuess = [];
    for (let _ of Array(4).keys())
      this.currentGuess.push('unset');
    for (let _ of Array(10).keys())
      this.guesses.push(new Guess(['unset', 'unset','unset','unset'], ['unset', 'unset','unset','unset']));

    console.log(this.guesses);
  }

  addColorToCurrentGuess(color: PegColor) {
    this.currentGuess.splice(this.currentGuess.indexOf('unset'), 1, color);
  }

  removeColorFromCurrentGuess(index: number) {
    this.currentGuess.splice(index, 1);
    this.currentGuess.push('unset');
  }
}
