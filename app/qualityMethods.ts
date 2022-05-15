import { Item } from "./Item"

const min_quality=0
const max_quality=50

const incrementQuality=(quality:number,num:number=1):number=>{
    return quality<max_quality?quality+num:quality;
}
const decrementQuality=(quality:number,num:number=1):number=>{
    return quality>min_quality?quality-num:quality;
}

export const updateQualitytoBackstage=(item:Item):Item=>{
    console.log("Entró en Backstage")
    
    item.sellIn<11 && 6<=item.sellIn?item.quality=incrementQuality(item.quality,2):item.quality;
    item.sellIn<6 && 0<item.sellIn?item.quality=incrementQuality(item.quality,3):item.quality;
    item.sellIn===0?item.quality=0:item.quality;

    item.sellIn-=1
    return item;
}

export const updateQualitytoAgedBrie=(item:Item)=>{
    console.log("Entró en Aged Brie")
    item.quality = incrementQuality(item.quality);
    item.quality = item.sellIn < 0 ? incrementQuality(item.quality) : item.quality;
    item.sellIn -= 1;
    return item
}
export const updateQualitytoSulfuras=(item:Item)=>{
    item.quality=80
    return item
}

export const updateQualitytoConjured=(item:Item)=>{
    console.log("Entró en Conjure")
    item.quality=decrementQuality(item.quality,2);
    item.sellIn<=0?item.quality = decrementQuality(item.quality,4):item.quality;
    item.sellIn-=1;
    return item;
}

export const updateQualityNormal=(item:Item)=>{
    console.log("Entró en calidad normal")
    item.quality=decrementQuality(item.quality);
    item.sellIn<=0?item.quality = decrementQuality(item.quality,2):item.quality;
    item.sellIn-=1;
    return item;
}
