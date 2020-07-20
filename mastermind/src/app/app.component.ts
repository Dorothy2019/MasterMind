import { Component } from '@angular/core';
import {fadeIn, fadeOut, scaleIn, scaleOut} from '../app/carousel/carousel.animations';
import {trigger, transition, style, animate, useAnimation} from '@angular/animations';





@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('carouselAnimation',[
      transition('void => *', [useAnimation(fadeIn, {params: { time: '2500ms' }})]),
      transition('* => void', [useAnimation(fadeOut, {params: { time: '2500ms' }})])
    ])
  ]
})
export class AppComponent {
  title = 'mastermind';
    
}
