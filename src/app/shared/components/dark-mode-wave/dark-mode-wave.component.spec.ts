import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeWaveComponent } from './dark-mode-wave.component';

describe('DarkModeWaveComponent', () => {
  let component: DarkModeWaveComponent;
  let fixture: ComponentFixture<DarkModeWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeWaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
