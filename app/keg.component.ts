import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{keg.beerName}} $\{{keg.price}}, ABV= {{keg.abv}}%, Brewery: {{keg.beerBrand}}, Pints Remaining: {{keg.pintCount}}</h3>
    <button class="btn-sm btn-info" (click)="beerSale(currentKeg)">Sell Pint</button>
  `
})

export class KegComponent {
  public keg: Keg;
  beerSale(clickedKeg: Keg): void {
    this.keg.pintCount = this.keg.pintCount-1 ;

  }
}
