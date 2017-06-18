import { Map } from 'immutable';
import ItemManager from './item-manager';

export default class Checkout {
  constructor() {
    this.itemManager = new ItemManager();
    this.discounts = Map();
  }

  discount(discount) {
    this.discounts = this.discounts.set(discount.sku, discount);
    return this; 
  }

  scan(item) {
    this.itemManager = this.itemManager.add(item);
    return this;
  }

  total() {
    return this.itemManager.getItems().reduce((total, item) => {
      const itemQuantity = this.itemManager.getQuantity(item);
      const itemDiscount = this.discounts.get(item.sku);

      if (itemDiscount && itemQuantity >= itemDiscount.quantity) {
        const multiplier = Math.floor(itemQuantity / itemDiscount.quantity);
        total += itemDiscount.price * multiplier;
        const remaining = itemQuantity - (multiplier * itemDiscount.quantity);
        total += item.price * remaining;
      } else {
        total += item.price * itemQuantity;
      }

      return total;
    }, 0);
  }
}
