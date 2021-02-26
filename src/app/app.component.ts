import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  darkMode: boolean = false;

  constructor(
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeService.on$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(d => this.darkMode = d);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
