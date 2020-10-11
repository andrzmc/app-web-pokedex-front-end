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
    this.types = types.map(item => ({img: `/assets/icons/${item.type.name}.png`, name: item.type.name}));
  }

}
