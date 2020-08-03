import { Component, OnInit } from '@angular/core';
import {fadeIn, fadeOut, scaleIn, scaleOut} from '../carousel/carousel.animations';
import {trigger, transition, style, animate, useAnimation} from '@angular/animations';

@Component({
  selector: 'mm-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  animations: [
    trigger('carouselAnimation',[
      transition('void => *', [useAnimation(fadeIn, {params: { time: '2500ms' }})]),
      transition('* => void', [useAnimation(fadeOut, {params: { time: '2500ms' }})])
    ])
  ]
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
