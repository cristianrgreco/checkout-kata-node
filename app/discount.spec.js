import chai from 'chai';
import Discount from './discount';

const should = chai.should();

describe('Discount', () => {

  it('should construct a Discount', () => {
    const discount = new Discount('A', 3, 2.50);

    discount.sku.should.equal('A');
    discount.quantity.should.equal(3);
    discount.price.should.equal(2.50);
  });
});
