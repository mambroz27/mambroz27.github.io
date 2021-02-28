import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeWaveComponent } from './components/dark-mode-wave/dark-mode-wave.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    DarkModeToggleComponent,
    DarkModeWaveComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DarkModeToggleComponent,
    DarkModeWaveComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
