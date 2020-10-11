import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pagination-pokemon',
  templateUrl: './pagination-pokemon.component.html',
  styleUrls: ['./pagination-pokemon.component.scss']
})

export class PaginationPokemonComponent implements OnInit {

  public catalogue: Array<any>;
  public next: string;
  public previous: string;

  constructor(private pokemon: PokemonService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateCatalogue();
    }, 1000);
  }

  public updateCatalogue(): void {
    this.catalogue = [];
    this.next = this.pokemon.getPokemonCatalogue().next;
    this.previous = this.pokemon.getPokemonCatalogue().previous;
    this.pokemon.getPokemonCatalogue().results.map(item => this.getInfo(item.url));
  }

  public getInfo(url: string): void {
    this.pokemon.getInfoPokemon(url).subscribe(data => {
      this.catalogue.push(data);
    });
  }

  public setCatalogue(page: string): void {
    this.pokemon.setPagePokemonCatalogue(page).subscribe((data: any) => {
      localStorage.setItem('pokemon-catalogue', JSON.stringify(data));
      this.updateCatalogue();
    });
  }


}
