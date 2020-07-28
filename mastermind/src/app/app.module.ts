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
//import {AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'carousel', component:CarouselComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    GameOverComponent,
    CarouselComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(routes),
   // AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
