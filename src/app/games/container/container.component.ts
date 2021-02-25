import { Component, OnInit } from '@angular/core';

const games = [
  'Asteroids'
];

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  game: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
