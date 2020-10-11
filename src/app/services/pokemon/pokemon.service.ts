import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonCatalogue(): any {
    if (!localStorage.getItem('pokemon-favorite')) { localStorage.setItem('pokemon-favorite', JSON.stringify([])); }
    return JSON.parse(localStorage.getItem('pokemon-catalogue'));
  }

  public setPagePokemonCatalogue(page: string): Observable<Pokemon> {
    return this.http.get(page).pipe(map((response: any) => response));
  }

  public getInfoPokemon(url: string): Observable<any> {
    return this.http.get(url).pipe(map(item => item));
  }

  public getDescriptionPokemon(url: string): Observable<any> {
    return this.http.get(url).pipe(map(item => item));
  }

}
