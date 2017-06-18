import { Map } from 'immutable';
import { preconditions } from './preconditions';

export default class DiscountManager {
  constructor() {
    this.discounts = Map();
  }

  add(discount) {
    preconditions.shouldBeDefined(discount);

    this.discounts = this.discounts.set(discount.sku, discount);
    return this;
  }

  getDiscount(item) {
    preconditions.shouldBeDefined(item);

    return this.discounts.get(item.sku) || null;
  }
}
