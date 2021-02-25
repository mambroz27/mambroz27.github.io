import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';



@NgModule({
  declarations: [ContainerComponent, AsteroidsComponent],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
