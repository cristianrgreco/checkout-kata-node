import { Map, Set } from 'immutable';

export default class ItemManager {
  constructor() {
    this.items = Set();  
    this.quantities = Map();
  }

  add(item) {
    this.items = this.items.add(item);
    this.quantities = this.quantities.set(item, this.getQuantity(item) + 1);
    return this; 
  }

  getQuantity(item) {
    return this.quantities.get(item) || 0;
  }

  getItems() {
    return this.items;
  }
}
