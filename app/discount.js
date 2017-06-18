import { preconditions } from './preconditions';

export default class Discount {
  constructor(sku, quantity, price) {
    preconditions
      .shouldBeString(sku)
      .shouldBeNumber(quantity)
      .shouldBeNumber(price);

    this.sku = sku;
    this.quantity = quantity;
    this.price = price;
  }
}
