import { default as preconditionsModule } from 'preconditions';

const preconditions = preconditionsModule.singleton();

export default class Item {
  constructor(sku, price) {
    preconditions
      .shouldBeString(sku)
      .shouldBeNumber(price);

    this.sku = sku;
    this.price = price;
  }
}
