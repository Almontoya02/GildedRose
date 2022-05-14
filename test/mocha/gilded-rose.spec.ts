import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/Item';

describe('Gilded Rose', () => {
  it('deberia agregar un nuevo item', () => {
    const gildedRose = new GildedRose([new Item('Backstage', 0, 0)]);
    const newItem=gildedRose.items[0];
    expect(newItem.name).to.equal('Backstage');
  });
});

describe('Reglas Basicas', () => {
  it('deberia disminuir quality y sellIn en 1', () => {
    const gildedRose = new GildedRose([new Item('Arroz',1,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(0);
    expect(newItem.sellIn).to.equal(0);
  });
  it('calidad nunca debe ser menor que 0', () => {
    const gildedRose = new GildedRose([new Item('Arroz',0,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(0);
    expect(newItem.sellIn).to.equal(-1);
  });
  it('deberia disminuir el doble ya que ya pasó la fecha de caducidad', () => {
    const gildedRose = new GildedRose([new Item('Arroz',0,5)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(2);
    expect(newItem.sellIn).to.equal(-1);
  });

});
