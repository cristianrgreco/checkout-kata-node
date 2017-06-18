import { Map } from 'immutable';

export default class DiscountManager {
  constructor() {
    this.discounts = Map();
  }

  add(discount) {
    this.discounts = this.discounts.set(discount.sku, discount);
    return this;
  }

  getDiscount(item) {
    return this.discounts.get(item.sku) || null;
  }
}
