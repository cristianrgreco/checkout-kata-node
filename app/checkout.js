import { Map } from 'immutable';
import { default as preconditionsModule } from 'preconditions';
import ItemManager from './item-manager';
import DiscountManager from './discount-manager';
import { calculateTotal } from './calculator';

const preconditions = preconditionsModule.singleton();

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
