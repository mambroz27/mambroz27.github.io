import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { GameAsteroidsComponent } from './game-asteroids/game-asteroids.component';



@NgModule({
  declarations: [ContainerComponent, DiceRollerComponent, GameAsteroidsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
