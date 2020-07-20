import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { PegComponent } from './peg/peg.component';
import { GameOverComponent } from './game-over/game-over.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GameComponent } from './game/game.component';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';


const routes: Routes = [
  {path: 'mm-game', component: GameComponent},
  {path: 'mm-carousel ', component:CarouselComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    GameOverComponent,
    CarouselComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    //RouterModule.forRoot(routes),
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
