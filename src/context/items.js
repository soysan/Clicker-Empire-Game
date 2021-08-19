import Item from '../models/item';
import { createContext } from 'react';

const FlipContext = createContext(new Item("Flip Machine", 'ability', 500, 'グリルをクリックごとに 25 円を取得します。', 15000, 25, 0))
const StockContext = createContext(new Item("ETF Stock", 'invest', Infinity, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します", 300000, 0.1, 0))
const BondsContext = createContext(new Item("ERF Bonds", 'invest', Infinity, "債券 ETF の購入分をまとめて加算し、毎秒 0.07% を取得します。", 300000, 0.07, 0))
const LemonadeContext = createContext(new Item("Lemonade Stand", 'realEstate', 1000, "毎秒 30 円を取得します。", 30000, 30, 0))
const IceContext = createContext(new Item("Ice Cream Truck", 'realEstate', 500, "毎秒 120 円を取得します。", 100000, 120, 0))
const HouseContext = createContext(new Item("House", "realEstate", 100, "毎秒 32,000 円を取得します。", 20000000, 32000, 0))
const TownContext = createContext(new Item("TownHouse", "realEstate", 100, "毎秒 64,000 円を取得します。", 40000000, 64000 ,0))
const MansionContext = createContext(new Item("Mansion", "realEstate", 20, "毎秒 500,000 円を取得します。", 250000000, 500000, 0))
const IndustrialContext = createContext(new Item("Industrial Space", "realEstate", 10, "毎秒 2,200,000 円を取得します。", 1000000000, 2200000, 0))
const HotelContext = createContext(new Item("Hotel Skyscraper", "realEstate", 5, "毎秒 25,000,000 円を取得します。", 10000000000, 25000000, 0))
const BulletContext = createContext(new Item("Bullet-Speed Sky Railway", "realEstate", 1, "毎秒 30,000,000,000 円を取得します。", 10000000000000, 30000000000, 0))

export const ProductsContext = {
  "Flip Machine": FlipContext,
  "ETF Stock": StockContext,
  "ETF Bonds": BondsContext,
  "Lemonade Stand": LemonadeContext,
  "Ice Cream Truck": IceContext,
  "House": HouseContext,
  "TownHouse": TownContext,
  "Mansion": MansionContext,
  "Industrial Space": IndustrialContext,
  "Hotel Skyscraper": HotelContext,
  "Bullet-Speed Sky Railway": BulletContext,
}

export const names = ["Flip Machine","ETF Stock", "ETF Bonds", "Lemonade Stand", "Ice Cream Truck", "House", "TownHouse", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky Railway"];
