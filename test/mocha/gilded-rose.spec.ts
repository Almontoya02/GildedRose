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

describe('Aged Brie',()=>{
  it('deberia aumentar la calidad a medida que envejece', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie',1,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(2);
    expect(newItem.sellIn).to.equal(0);
  });
})

describe('Backstage',()=>{
  it('deberia aumentar la calidad en 2 cuando hay 10 dias o menos de sellIn', () => {
    const gildedRose = new GildedRose([new Item('Backstage',10,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(3);
    expect(newItem.sellIn).to.equal(9);
  });
  it('deberia aumentar la calidad en 3 cuando hay 5 dias o menos de sellIn', () => {
    const gildedRose = new GildedRose([new Item('Backstage',3,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(4);
    expect(newItem.sellIn).to.equal(2);
  });
  it('deberia la calidad quedar en 0 despues del concierto', () => {
    const gildedRose = new GildedRose([new Item('Backstage',0,10)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(0);
    expect(newItem.sellIn).to.equal(-1);
  });
})

describe('Sulfuras',()=>{
  it('deberia ser la calidad 80 y no disminuir sellIn', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras',10,1)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(80);
    expect(newItem.sellIn).to.equal(10);
  });
})

describe('Conjured',()=>{
  it('deberia disminuir quality en 2 y sellIn en 1', () => {
    const gildedRose = new GildedRose([new Item('Conjured',10,10)]);
    const items=gildedRose.updateQuality();
    const newItem=items[0]
    expect(newItem.quality).to.equal(8);
    expect(newItem.sellIn).to.equal(9);
  });
})
