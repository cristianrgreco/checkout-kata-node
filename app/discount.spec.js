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

  it('should raise an error if SKU is not a string', () => {
    const invalidSku = 123;

    should.throw(() => new Discount(invalidSku, 3, 2.50));
  });

  it('should raise an error if quantity is not a number', () => {
    const invalidQuantity = 'A';

    should.throw(() => new Discount('A', invalidQuantity, 2.50)); 
  });

  it('should raise an error if price is not a number', () => {
    const invalidPrice = 'A';

   should.throw(() => new Discount('A', 3, invalidPrice)); 
  });
});
