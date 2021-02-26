import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeWaveComponent } from './components/dark-mode-wave/dark-mode-wave.component';



@NgModule({
  declarations: [
    DarkModeToggleComponent,
    DarkModeWaveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DarkModeToggleComponent,
    DarkModeWaveComponent
  ]
})
export class SharedModule { }
