import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { GameAsteroidsComponent } from './game-asteroids/game-asteroids.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'asteroids', component: GameAsteroidsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
