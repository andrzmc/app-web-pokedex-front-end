import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss']
})
export class MenuVerticalComponent implements OnInit {

  public pokeball: string;

  constructor() { }

  ngOnInit(): void {
    this.pokeball = '/assets/pokeball.png';
  }

}
