import chai from 'chai';
import Item from './item';
import Discount from './discount';
import DiscountManager from './discount-manager';

const should = chai.should();

describe('DiscountManager', () => {

  it('should return the discount of a given item or null', () => {
    const itemA = new Item('A', 200);
    const itemB = new Item('B', 250);
    const discountA = new Discount('A', 2, 300);

    const discountManager = new DiscountManager()
      .add(discountA);

    discountManager.getDiscount(itemA).should.equal(discountA);
    should.equal(discountManager.getDiscount(itemB), null);
  });
});
