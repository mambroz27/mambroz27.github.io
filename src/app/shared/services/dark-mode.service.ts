import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  on$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggle() {
    this.on$.next(!this.on$.value);
  }
}
