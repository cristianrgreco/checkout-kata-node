import chai from 'chai';
import Item from './item';
import Discount from './discount';
import Checkout from './checkout';

const should = chai.should();

describe('Checkout', () => {

  it('should return the total of all items', () => {
    const discountA = new Discount('A', 2, 300);

    const itemA = new Item('A', 200);
    const itemB = new Item('B', 250);

    const checkout = new Checkout()
      .discount(discountA)
      .scan(itemA)
      .scan(itemA)
      .scan(itemB);

    checkout.total().should.equal(550);
  });
});
