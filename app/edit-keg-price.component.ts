import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-price',
  inputs: ['keg'],
  template:`
  <div class="keg-form">
    <h3>Edit {{keg.beerName}}'s Price: Current Price: $\{{ keg.price }}</h3>
    <div class="row">
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form"/>
    </div>
  </div>
  `
})

export class EditKegPriceComponent {
  public keg: Keg;
}
