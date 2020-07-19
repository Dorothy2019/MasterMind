import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
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


  get colorLower() {
    return this.color ?? "unset"; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
