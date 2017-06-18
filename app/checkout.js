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
      return this.itemHasDiscount(item)
        ? total += this.calculateDiscountPrice(item)
        : total += this.calculateRegularPrice(item);
    }, 0);
  }

  itemHasDiscount(item) {
    const quantity = this.itemManager.getQuantity(item);
    const discount = this.discountManager.getDiscount(item);

    return discount && quantity >= discount.quantity;
  }

  calculateRegularPrice(item) {
    return item.price * this.itemManager.getQuantity(item); 
  }

  calculateDiscountPrice(item) {
    const quantity = this.itemManager.getQuantity(item);
    const discount = this.discountManager.getDiscount(item);

    const discountMultiplier = Math.floor(quantity / discount.quantity);
    const remainingRegularItems = quantity - (discountMultiplier * discount.quantity);

    return (discount.price * discountMultiplier) + (item.price * remainingRegularItems);
  }
}
