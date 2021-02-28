import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  darkMode: boolean = false;

  constructor(
    private darkModeService: DarkModeService
  ) { }

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
