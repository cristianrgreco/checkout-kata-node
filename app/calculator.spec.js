import chai from 'chai';
import Item from './item';
import ItemManager from './item-manager';
import Discount from './discount';
import DiscountManager from './discount-manager';
import { calculateTotal } from './calculator';

const should = chai.should();

describe('calculateTotal', () => {

  it('should return zero if there are no items', () => {
    const itemManager = new ItemManager();
    const discountManager = new DiscountManager();

    calculateTotal(itemManager, discountManager).should.equal(0);
  });

  it('should return the sum of the prices of all items', () => {
    const itemA = new Item('A', 200);
    const itemB = new Item('B', 250);
    const itemManager = new ItemManager()
      .add(itemA)
      .add(itemA)
      .add(itemB);

    const discountManager = new DiscountManager();

    calculateTotal(itemManager, discountManager).should.equal(650);
  });

  it('should return the sum of the prices with discounts applied', () => {
    const itemA = new Item('A', 200);
    const itemB = new Item('B', 250);
    const itemManager = new ItemManager()
      .add(itemA)
      .add(itemA)
      .add(itemB);

    const discountA = new Discount('A', 2, 300);
    const discountManager = new DiscountManager()
      .add(discountA);

    calculateTotal(itemManager, discountManager).should.equal(550);
  });

  it('should return the sum of the prices with discounts applied with left-over items', () => {
    const itemA = new Item('A', 200);
    const itemB = new Item('B', 250);
    const itemManager = new ItemManager()
      .add(itemA)
      .add(itemA)
      .add(itemA)
      .add(itemB);

    const discountA = new Discount('A', 2, 300);
    const discountManager = new DiscountManager()
      .add(discountA);

    calculateTotal(itemManager, discountManager).should.equal(750);
  });
});
