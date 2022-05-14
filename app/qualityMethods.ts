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
    let{sellIn,quality}=item

    sellIn<11?quality=incrementQuality(quality,2):quality;
    sellIn<6?quality=incrementQuality(quality,3):quality;
    sellIn===0?quality=0:quality=incrementQuality(quality);

    sellIn-=1
    return item;
}

export const updateQualitytoAgedBrie=(item:Item)=>{
    console.log("Entró en Aged Brie")
    let{sellIn,quality}=item;
    quality = incrementQuality(quality);
    quality = sellIn < 0 ? incrementQuality(quality) : quality;
    sellIn -= 1;
    return item
}
export const updateQualitytoSulfuras=(item:Item)=>{
    item.quality=80
    return item
}

export const updateQualitytoConjured=(item:Item)=>{
    console.log("Entró en Conjure")
    let{sellIn,quality}=item;
    quality=decrementQuality(quality,2);
    sellIn<=0?quality = decrementQuality(quality,4):quality;
    sellIn-=1;
    return item;
}

export const updateQualityNormal=(item:Item)=>{
    console.log("Entró en calidad normal")
    item.quality=decrementQuality(item.quality);
    item.sellIn<=0?item.quality = decrementQuality(item.quality,2):item.quality;
    item.sellIn-=1;
    return item;
}
