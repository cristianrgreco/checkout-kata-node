import Immutable, { Set } from 'immutable';
import chai from 'chai';
import Item from './item';
import ItemManager from './item-manager';

const should = chai.should();

describe('ItemManager', () => {

  it('should return all unique items', () => {
    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);

    const itemManager = new ItemManager()
     .add(itemA)
     .add(itemA)
     .add(itemB);

    const expected = Set.of(itemA, itemA, itemB);
    const actual = itemManager.getItems();
    Immutable.is(expected, actual).should.be.true;
  });

  it('should return the quantity of a given item', () => {
    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);
  
    const itemManager = new ItemManager()
      .add(itemA)
      .add(itemA);

    itemManager.getQuantity(itemA).should.equal(2);
    itemManager.getQuantity(itemB).should.equal(0);
  });
});
