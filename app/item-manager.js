import { Map, Set } from 'immutable';
import { preconditions } from './preconditions';

export default class ItemManager {
  constructor() {
    this.items = Set();  
    this.quantities = Map();
  }

  add(item) {
    preconditions.shouldBeDefined(item);

    this.items = this.items.add(item);
    this.quantities = this.quantities.set(item, this.getQuantity(item) + 1);

    return this; 
  }

  getQuantity(item) {
    preconditions.shouldBeDefined(item);

    return this.quantities.get(item) || 0;
  }

  getItems() {
    return this.items;
  }
}
