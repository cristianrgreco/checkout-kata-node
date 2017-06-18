import chai from 'chai';
import Item from './item';
import Discount from './discount';
import DiscountManager from './discount-manager';

const should = chai.should();

describe('DiscountManager', () => {

  it('should return the discount of a given item or null', () => {
    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);
    const discountA = new Discount('A', 2, 3.00);

    const discountManager = new DiscountManager()
      .add(discountA);

    discountManager.getDiscount(itemA).should.equal(discountA);
    should.equal(discountManager.getDiscount(itemB), null);
  });
});
