import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  @Input() typesChildren: Array<any>;
  public types: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.selectIcon(this.typesChildren);
  }

  public selectIcon(types: Array<any>): void {
    this.types = types.map(item => ({img: `/assets/icons/${item.type.name}.svg`, name: item.type.name}));
  }

  public setColorType(name: string): any {
    const style = {backgroundColor: ''};
    switch(name) {
      case 'normal':
        style.backgroundColor = '#C895A4';
        break;
      case 'fighting':
        style.backgroundColor = '#EE6038';
        break;
      case 'flying':
        style.backgroundColor = '#92B1C6';
        break;
      case 'poison':
        style.backgroundColor = '#5B2A86';
        break;
      case 'ground':
        style.backgroundColor = '#A46D2A';
        break;
      case 'rock':
        style.backgroundColor = '#471709';
        break;
      case 'bug':
        style.backgroundColor = '#3A994F';
        break;
      case 'ghost':
        style.backgroundColor = '#8D648E';
        break;
      case 'steel':
        style.backgroundColor = '#5F746D';
        break;
      case 'fire':
        style.backgroundColor = '#A91C20';
        break;
      case 'water':
        style.backgroundColor = '#83A6FA';
        break;
      case 'electric':
        style.backgroundColor = '#E1E129';
        break;
      case 'psychic':
        style.backgroundColor = '#F61A90';
        break;
      case 'grass':
        style.backgroundColor = '#25C84C';
        break;
      case 'ice':
        style.backgroundColor = '#80CFF8';
        break;
      case 'dragon':
        style.backgroundColor = '#418A93';
        break;
      case 'dark':
        style.backgroundColor = '#020403';
        break;
      case 'fairy':
        style.backgroundColor = '#931846';
        break;
      case 'shadow':
        style.backgroundColor = '#929BA4';
        break;
      default:
        style.backgroundColor = '#cccccc';
        break;
    }
    return style;
  }

}
