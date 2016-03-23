import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
  <div class="container">
    <h1>Beer List</h1>
    <keg-list
      [kegList]= "kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Rainier", "Rainier", 2.50, 4.7, 0),
      new Keg("Apocolyspe IPA", "10 Barrel", 5, 6.7, 1),
      new Keg("Four", "Upright", 5, 6.2, 2),
      new Keg("Tecate", "Tecate", 3, 4.3, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  console.log("parent", clickedKeg)
  }
}
