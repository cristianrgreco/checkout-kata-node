import chai from 'chai';
import Item from './item';

const should = chai.should();

describe('Item', () => {

  it('should construct an Item', () => {
    const item = new Item('A', 100);

    item.sku.should.equal('A');
    item.price.should.equal(100);
  });
});
