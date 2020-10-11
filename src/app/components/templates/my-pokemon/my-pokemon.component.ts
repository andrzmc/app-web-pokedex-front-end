import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss']
})
export class MyPokemonComponent implements OnInit {

  public myCatalogue: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.updateMyCatalogue();
  }

  public updateMyCatalogue(): void {
    this.myCatalogue = JSON.parse(localStorage.getItem('pokemon-favorite'));
  }

  public removeFavorites(id: number): void {
    const favorites = JSON.parse(localStorage.getItem('pokemon-favorite'));
    const result = favorites.filter(data => data.id !== id);
    localStorage.setItem('pokemon-favorite', JSON.stringify(result));
    this.updateMyCatalogue();
  }

}
