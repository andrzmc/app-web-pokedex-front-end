import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public auth: any;

  constructor(private pokemon: PokemonService) {
    this.auth = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit(): void {
    if (localStorage.getItem('pokemon-catalogue')) { return; }
    this.pokemon.setPagePokemonCatalogue().subscribe((data: any) => {
      localStorage.setItem('pokemon-catalogue', JSON.stringify(data));
    });
  }
  

}
