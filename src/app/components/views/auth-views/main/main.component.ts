import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public auth: string;

  constructor(private pokemon: PokemonService) {
    this.auth = sessionStorage.getItem('user');
  }

  ngOnInit(): void {
    this.setPokemons(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=30`);
  }

  public setPokemons(page: string): void {
    this.pokemon.setPagePokemonCatalogue(page).subscribe((data: any) => {
      localStorage.setItem('pokemon-catalogue', JSON.stringify(data));
    });
  }

}
