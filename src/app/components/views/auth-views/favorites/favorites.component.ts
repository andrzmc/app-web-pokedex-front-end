import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public auth: any;

  constructor() {
    this.auth = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit(): void {}

}
