import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <div class="row">
        <h3>Enter New Keg</h3>
        <input placeholder="Beer Name" class="col-sm-8 input-lg" #newName>
        <input placeholder="Price" class="col-sm-8 input-lg" required #newPrice>
        <input placeholder="ABV%" class="col-sm-8 input-lg" required #newABV>
        <input placeholder="Brewery" class="col-sm-8 input-lg" required #newBrewery>
      </div>
      <button class="btn-lg btn-success add"(click)="addKeg(newName, newPrice, newABV, newBrewery)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userPrice: HTMLInputElement, userABV: HTMLInputElement, userBrewery: HTMLInputElement){
    this.onSubmitNewKeg.emit([userName.value, userBrewery.value, userPrice.value, userABV.value])
    console.log(userName.value, userPrice.value, userBrewery.value, userABV.value);
    userName.value = "";
    userPrice.value = "";
    userABV.value = "";
    userBrewery.value = "";
  }
}
