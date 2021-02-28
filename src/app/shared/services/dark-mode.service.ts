import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  on$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.init();
  }

  /**
   * Check if setting is in local storage
   */
  init() {
    const saved = localStorage.getItem('dark-mode');

    if (saved !== null) {
      this.on$.next(JSON.parse(saved));
    }
  }

  /**
   * Toggle dark mode
   */
  toggle() {
    this.on$.next(!this.on$.value);
    localStorage.setItem('dark-mode', JSON.stringify(this.on$.value));
  }
}
