import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, style, animate, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut, scaleIn, scaleOut} from './carousel.animations'
import {Router} from "@angular/router";

@Component({
  selector: 'mm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation',[
      transition('void => *', [useAnimation(scaleIn, {params: { time: '1500ms' }})]),
      transition('* => void', [useAnimation(scaleOut, {params: { time: '1500ms' }})])
    ])
  ]
})
export class CarouselComponent implements OnInit {


  currentSlide =0;

  public slides = [
    {src: 'assets/mastermind1.jpg'},
    {src: 'assets/mastermind2.jpg'},
    {src: 'assets/mastermind3.jpg'},
    {src: 'assets/mastermind4.jpg'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPreviousClick(){
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick(){
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  playGame(){
    this.router.navigateByUrl('mm-game');
  }
  
}
