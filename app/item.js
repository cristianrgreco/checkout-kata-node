import { preconditions } from './preconditions';

export default class Item {
  constructor(sku, price) {
    preconditions
      .shouldBeString(sku)
      .shouldBeNumber(price);

    this.sku = sku;
    this.price = price;
  }
}
