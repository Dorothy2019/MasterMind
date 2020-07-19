import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import {PegColor} from '../models/peg-color';
import {PegType} from '../models/peg-type';


@Component({
  selector: 'mm-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.scss']
})
export class PegComponent implements OnInit {

  @Input() 
  color: PegColor; 

  @Input()
  type: PegType;

  @Output()
  pegClick: EventEmitter<void> = new EventEmitter()


  get colorLower() {
    return this.color ?? "unset"; 
  }

  onPegClicked(){
    this.pegClick.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
