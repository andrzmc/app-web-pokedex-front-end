import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-favorites',
  templateUrl: './action-favorites.component.html',
  styleUrls: ['./action-favorites.component.scss']
})
export class ActionFavoritesComponent implements OnInit {

  @Input() itemChildren: any;
  public status: boolean;

  constructor() { }

  ngOnInit(): void {
    this.checkStatusFavorites(this.itemChildren.id);
  }

  public checkStatusFavorites(id: number): void {
    if (localStorage.getItem('pokemon-favorite')) {
      const favorites = JSON.parse(localStorage.getItem('pokemon-favorite'));
      const check = favorites.filter(item => item.id === id);
      if (check.length > 0) { this.status = true; }
      if (check.length === 0) { this.status = false; }
    }
  }

  public addFavorites(item: any): void {
    const favorites = JSON.parse(localStorage.getItem('pokemon-favorite'));
    favorites.push(item);
    localStorage.setItem('pokemon-favorite', JSON.stringify(favorites));
    this.status = true;
  }

  public removeFavorites(id: number): void {
    const favorites = JSON.parse(localStorage.getItem('pokemon-favorite'));
    const result = favorites.filter(data => data.id !== id);
    localStorage.setItem('pokemon-favorite', JSON.stringify(result));
    this.status = false;
  }

}
