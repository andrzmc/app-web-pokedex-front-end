import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public auth: string;
  public pokemon: string;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = '/assets/pokeball.png';
    this.auth = sessionStorage.getItem('user');
  }

}
