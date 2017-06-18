import Immutable, { Set } from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import Item from './item';
import ItemManager from './item-manager';

chai.use(chaiImmutable);
const should = chai.should();

describe('ItemManager', () => {

  it('should return all items', () => {
    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);

    const itemManager = new ItemManager()
     .add(itemA)
     .add(itemA)
     .add(itemB);

    itemManager.getItems().should.equal(Set.of(itemA, itemB));
  });

  it('should return the quantity of an item', () => {
    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);
  
    const itemManager = new ItemManager()
      .add(itemA)
      .add(itemA);

    itemManager.getQuantity(itemA).should.equal(2);
    itemManager.getQuantity(itemB).should.equal(0);
  });
});
