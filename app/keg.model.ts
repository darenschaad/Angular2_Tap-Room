export class Keg {
  public done: boolean = false;
  constructor(public beerName: string, public beerBrand: string, public price: number, public abv: number, public pintCount: number, public id: number) {

  }
}
