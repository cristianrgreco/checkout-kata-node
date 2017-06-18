import chai from 'chai';
import Item from './item';

const should = chai.should();

describe('Item', () => {

  it('should construct an Item', () => {
    const item = new Item('A', 1.00);

    item.sku.should.equal('A');
    item.price.should.equal(1.00);
  });

  it('should raise an error if SKU is not a string', () => {
    const invalidSku = 123;

    should.throw(() => new Item(invalidSku, 1.00), 'Variable should be a String');
  });

  it('should raise an error if price is not a number', () => {
    const invalidPrice = 'A';

    should.throw(() => new Item('A', invalidPrice), 'Variable should be a Number');
  });
});
