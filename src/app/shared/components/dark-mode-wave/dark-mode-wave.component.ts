import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-wave',
  templateUrl: './dark-mode-wave.component.html',
  styleUrls: ['./dark-mode-wave.component.scss']
})
export class DarkModeWaveComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  mode: boolean = false;

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
    this.darkModeService.on$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(m => this.mode = m);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
