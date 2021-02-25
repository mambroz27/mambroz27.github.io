import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAsteroidsComponent } from './game-asteroids.component';

describe('GameAsteroidsComponent', () => {
  let component: GameAsteroidsComponent;
  let fixture: ComponentFixture<GameAsteroidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAsteroidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
