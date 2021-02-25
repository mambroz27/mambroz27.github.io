import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

import { GamesRoutingModule } from './games-routing.module';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { GameAsteroidsComponent } from './game-asteroids/game-asteroids.component';



@NgModule({
  declarations: [ContainerComponent, DiceRollerComponent, GameAsteroidsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
