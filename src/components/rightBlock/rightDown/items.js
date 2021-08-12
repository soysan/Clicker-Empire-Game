import Item from '../../../models/item';

export const items = {
  "ETF Stock": new Item("ETF Stock", 1, 0, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します", 300000, "0.1%"),
  "ETF Bonds": new Item("ERF Bonds", 1, 0, "債券 ETF の購入分をまとめて加算し、毎秒 0.07% を取得します。", 300000, "0.07%"),
  "Lemonade Stand": new Item("Lemonade Stand", 2, 1000, "毎秒 30 円を取得します。", 30000, "30"),
  "Ice Cream Truck": new Item("Ice Cream Truck", 2, 500, "毎秒 120 円を取得します。", 100000, "120"),
  "House": new Item("House", 2, 100, "毎秒 32,000 円を取得します。", 20000000, "32000"),
  "TownHouse": new Item("TownHouse", 2, 100, "毎秒 64,000 円を取得します。", 40000000, "64000"),
  "Mansion": new Item("Mansion", 2, 20, "毎秒 500,000 円を取得します。", 250000000, "500000"),
  "Industrial Space": new Item("Industrial Space", 2, 10, "毎秒 2,200,000 円を取得します。", 1000000000, "2200000"),
  "Hotel Skyscraper": new Item("Hotel Skyscraper", 2, 5, "毎秒 25,000,000 円を取得します。", 10000000000, "25000000"),
  "Bullet-Speed Sky Railway": new Item("Bullet-Speed Sky Railway", 2, 1, "毎秒 30,000,000,000 円を取得します。", 10000000000000, "30000000000"),
}

export const names = ["ETF Stock", "ETF Bonds", "Lemonade Stand", "Ice Cream Truck", "House", "TownHouse", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky Railway"];
