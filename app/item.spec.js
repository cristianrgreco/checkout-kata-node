import chai from 'chai';
import Item from './item';

const should = chai.should();

describe('Item', () => {

  it('should construct an Item', () => {
    const item = new Item('A', 1.00);

    item.sku.should.equal('A');
    item.price.should.equal(1.00);
  });
});
