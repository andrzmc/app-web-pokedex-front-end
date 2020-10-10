import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})

export class SignComponent implements OnInit {

  public count: number;
  public pokemon: string;
  public form: boolean;

  constructor() { }

  ngOnInit(): void {
    this.count = 1;
    this.form = true;
    this.pokemon = `/assets/${this.count}.png`;
    this.setDelay();
  }

  public setDelay = () => {
    if (this.count === 10) {
      setTimeout(() => { this.count = 1; }, 10000);
      return;
    }
    setTimeout(() => {
      this.pokemon = `/assets/${this.count++}.png`;
      this.setDelay();
    }, 10000);
  }

  public changeViewForm = (x) => {
    this.form = x;
  }

}
