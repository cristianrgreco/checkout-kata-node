import chai from 'chai';
import Item from './item';
import Discount from './discount';
import Checkout from './checkout';

const should = chai.should();

describe('Checkout', () => {

  it('should return the total of all items', () => {
    const discountA = new Discount('A', 2, 3.00);

    const itemA = new Item('A', 2.00);
    const itemB = new Item('B', 2.50);

    const checkout = new Checkout()
      .discount(discountA)
      .scan(itemA)
      .scan(itemA)
      .scan(itemB);

    checkout.total().should.equal(5.50);
  });
});
