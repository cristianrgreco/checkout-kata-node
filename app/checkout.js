import ItemManager from './item-manager';
import DiscountManager from './discount-manager';
import { preconditions } from './preconditions';
import { calculateTotal } from './calculator';

export default class Checkout {
  constructor() {
    this.itemManager = new ItemManager();
    this.discountManager = new DiscountManager();
  }

  discount(discount) {
    preconditions.shouldBeDefined(discount);

    this.discountManager = this.discountManager.add(discount);
    return this;
  }

  scan(item) {
    preconditions.shouldBeDefined(item);

    this.itemManager = this.itemManager.add(item);
    return this;
  }

  total() {
    return calculateTotal(this.itemManager, this.discountManager);
  }
}
