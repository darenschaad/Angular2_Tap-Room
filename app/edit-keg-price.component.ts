import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-price',
  inputs: ['keg'],
  template:`
    <h3>Edit Price: {{ keg.price }}</h3>
  `
})

export class EditKegPriceComponent {
  public keg: Keg;
}
