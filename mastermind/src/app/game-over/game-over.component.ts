import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PegColor} from '../models/peg-color'


@Component({
  selector: 'mm-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  @Input()
  won: boolean;

  @Input()
  numberOfGuesses: number;

  @Input()
  lastGuess: PegColor[];

  @Input()
  secretColors: PegColor[];

  @Output()
  restart = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  
  // It's for the final popover window
  initParameters(inputs: { won: boolean, numberOfGuesses: number, lastGuess: PegColor[], secretColors: PegColor[] }, outputs: { restart: (...args: any[]) => any }) {
    for (let prop in inputs)
      this[prop] = inputs[prop];
    for (let prop in outputs)
      (this[prop] as EventEmitter<any>).subscribe(outputs[prop]);
  }

}
