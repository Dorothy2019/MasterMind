import { Component, OnInit } from '@angular/core';
import { Guess } from '../models/guess';
import { PegColor } from '../models/peg-color';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import {GameOverComponent} from '../game-over/game-over.component'

@Component({
  selector: 'mm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  guesses: Guess[];
  currentGuess: PegColor[];
  // The colors, among we can choose
  possibleValues: PegColor[] = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];
  private secretColors: PegColor[]

  constructor(private modalService: NgbModal) { 
    this.initGame();
  }

  ngOnInit(): void {
  }

  // Initializing the UI, and the secret pegs, which we have to guess
  // We will have 10 possibilities to figure out the correct color sentence
  initGame() {
    this.guesses = [];
    this.currentGuess = [];
    this.secretColors = Array.from(Array(4)).map(_ => this.possibleValues[Math.floor(Math.random() * this.possibleValues.length)]);
    for (let _ of Array(4).keys())
      this.currentGuess.push('unset');
    for (let _ of Array(10).keys())
      this.guesses.push(new Guess(['unset', 'unset','unset','unset'], ['unset', 'unset','unset','unset']));

    console.log(this.guesses);
  }

  // Here we can add new color to the guess list
  addColorToCurrentGuess(color: PegColor) {
    this.currentGuess.splice(this.currentGuess.indexOf('unset'), 1, color);
  }

  // Here we will be able to remove a color from the guess list, and if it isn't the last one every other peg moves
  // to the left.
  removeColorFromCurrentGuess(index: number) {
    this.currentGuess.splice(index, 1);
    this.currentGuess.push('unset');
  }

  guess(){
    const current = this.currentGuess.slice();
    const secret = this.secretColors.slice();

    let matches = 0; // we count how much is in the correct place
    for (let i=0; i< current.length; i++){
      if(current[i] == secret[i]){
        matches++;
        current.splice(i,1);
        secret.splice(i,1);
        i--;
      }
    }
    let wrongPlace = 0; // we count how much is in the wrong place
    for(let i=0; i<current.length; i++){
      const secretIndex = secret.indexOf(current[i]);
      if(secretIndex !== -1){
        wrongPlace++;
        current.splice(i,1);
        secret.splice(secretIndex,1);
        i--;
      }
    }
    const currentInList = this.guesses.find(g => g.colors.indexOf('unset')!== -1 );
    currentInList.colors = this.currentGuess; // The tip's color we give to the list element
    currentInList.keys = Array.from(Array(4).keys())
      .map<PegColor>(i => i < matches ? 'black' : i < matches + wrongPlace ? 'white' : 'unset') // Creating as much black key as we guess well, 
      // as much white as it is in the wrong place, and the others remain gray.
    this.currentGuess = Array.from(Array(4)).map(_ => 'unset'); // The new guess are inset.  

    if (matches === 4) { // Ha mind talált, nyertünk.
      this.openGameOverModal(true);
    }
    else if (!this.guesses.some(g => g.colors.some(c => c === 'unset'))) { // If all the guesses are made we lost
      this.openGameOverModal(false);
    }
  }

  // Show popup window in the final of the game
  openGameOverModal(won: boolean) {
    let modal = this.modalService.open(GameOverComponent, { backdrop: 'static', centered: true });
    (modal.componentInstance as GameOverComponent).initParameters({
      won,
      numberOfGuesses: this.guesses.filter(g => !g.colors.includes('unset')).length,
      lastGuess: this.guesses.filter(g => !g.colors.includes('unset')).reverse()[0].colors,
      secretColors: this.secretColors.slice()
    }, {
      restart: () => {
        modal.close();
        this.initGame();
      }
    });
  }

}
