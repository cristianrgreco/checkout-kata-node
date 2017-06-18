import { Map } from 'immutable';

export default class Checkout {
  constructor() {
    this.items = Map();
    this.discounts = Map();
  }

  discount(discount) {
    this.discounts = this.discounts.set(discount.sku, discount);
    return this; 
  }

  scan(item) {
    const quantity = this.items.get(item) || 0;
    this.items = this.items.set(item, quantity + 1);
    return this;
  }

  total() {
    return this.items.reduce((total, quantity, item) => { 
      const discount = this.discounts.get(item.sku);

      if (discount && quantity >= discount.quantity) {
        const multiplier = Math.floor(quantity / discount.quantity);
        total += discount.price * multiplier;
        const remaining = quantity - (multiplier * discount.quantity);
        total += item.price * remaining;
      } else {
        total += item.price * quantity;
      }

      return total;
    }, 0);
  }
}
