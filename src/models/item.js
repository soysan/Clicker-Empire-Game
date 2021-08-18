export default class Item {
  constructor(name, type, maxVal, desc, price, effect, count) {
    this.name = name;
    this.type = type;
    this.maxVal = maxVal;
    this.desc = desc;
    this.price = price;
    this.effect = effect;
    this.count = count;
    this.isOpen = false;
  }
}
