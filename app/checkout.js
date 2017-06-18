import { Map } from 'immutable';
import ItemManager from './item-manager';
import DiscountManager from './discount-manager';

export default class Checkout {
  constructor() {
    this.itemManager = new ItemManager();
    this.discountManager = new DiscountManager();
  }

  discount(discount) {
    this.discountManager = this.discountManager.add(discount);
    return this; 
  }

  scan(item) {
    this.itemManager = this.itemManager.add(item);
    return this;
  }

  total() {
    return this.itemManager.getItems().reduce((total, item) => {
      const quantity = this.itemManager.getQuantity(item);
      const discount = this.discountManager.getDiscount(item);

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
