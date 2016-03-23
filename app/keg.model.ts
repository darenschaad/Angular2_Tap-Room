export class Keg {
  public done: boolean = false;
  public pintCount: number = 124;
  constructor(public beerName: string, public beerBrand: string, public price: number, public abv: number, public id: number) {

  }
}
