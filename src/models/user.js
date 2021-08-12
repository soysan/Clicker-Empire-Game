export default class User {
  constructor(name, age, days, money, items) {
    this.name = name;
    this.age = age;
    this.days = days;
    this.money = money;
    this.items = items;
    this.count = 0;
    this.addPerClick = 25;
    this.addPerSec = 0;
    this.stock = 0;
  }
}
