import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component'
import { GameComponent } from '../game/game.component';

const routes: Routes = [
    {
        path: 'mm-game',
        component: GameComponent,
    },
    {
        path: 'mm-carousel',
        component: CarouselComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
