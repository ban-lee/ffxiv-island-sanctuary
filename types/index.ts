import { Dispatch, SetStateAction } from 'react';

export type Color =
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'lime';

export type SetState<T> = Dispatch<SetStateAction<T>>;

export enum Popularity {
  UNKNOWN = '',
  LOW = 'Low',
  AVERAGE = 'Average',
  HIGH = 'High',
  VERY_HIGH = 'Very High',
}

export enum Supply {
  UNKNOWN = '',
  NONEXISTENT = 'Nonexistent',
  INSUFFICIENT = 'Insufficient',
  SUFFICIENT = 'Sufficient',
  SURPLUS = 'Surplus',
  OVERFLOWING = 'Overflowing',
}

export enum DemandShift {
  UNKNOWN = '',
  PLUMMETING = 'Plummeting',
  DECREASING = 'Decreasing',
  NONE = 'None',
  INCREASING = 'Increasing',
  SKYROCKETING = 'Skyrocketing',
}

export enum ItemCategory {
  UNKNOWN,
  MATERIAL,
  RARE_MATERIAL,
  GARDEN_STARTER,
  PRODUCE,
  LEAVINGS,
  FEED,
  RESTRAINT,
  TOOL,
  HANDICRAFT,
}

export enum ItemMethod {
  UNKNOWN = '',
  GATHERING = 'gathering',
  GRANARY = 'granary',
  FARM_SHOP = 'farm_shop',
  FARM = 'farm',
  PASTURE = 'pasture',
  CRAFTING = 'crafting',
}

export interface IsProductTrend {
  id?: number;
  item: string;

  popularity: Popularity;
  supply: Supply;
  demandShift?: DemandShift;
}

export interface IsMaterial {
  id: number;
  qty: number;
  item: string;
}

export interface IsProduct {
  id: number;
  item: string;
  material1: IsMaterial;
  material2: IsMaterial;
  material3?: IsMaterial;
  purposeCat: string;
  materialCat: string;
  rank: number;
  time: number;
  value: number;
}

export interface IsProductWithKey extends IsProduct {
  key: string;
}

export interface IsItem {
  id: number;
  item: string;
  category: ItemCategory;
  method: ItemMethod;
}

export interface SanctuaryInfo {
  rank: number;
  workshop1Level: number;
  workshop2Level: number;
  workshop3Level: number;
}

export interface TrendData {
  importDate?: Date,
  data: Map<string, IsProductTrend>;
}
