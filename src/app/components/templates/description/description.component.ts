import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() descriptionChildren: string;

  public description: string;

  constructor(private pokemon: PokemonService) { }

  ngOnInit(): void {
    this.getDescription(this.descriptionChildren);
  }

  public getDescription(url: string): void {
    this.pokemon.getDescriptionPokemon(url).subscribe(data => {
        const result = data.flavor_text_entries.filter(item => item.language.name === 'es');
        this.description = result[0].flavor_text;
    });
  }

}
