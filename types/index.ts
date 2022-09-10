import { Dispatch, SetStateAction } from 'react';

export type Color =
  | 'dark-blue'
  | 'light-blue'
  | 'teal'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'purple'
  | 'gray';

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

export interface IsItemTrend {
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

export interface IsItemPouch {
  id: number;
  item: string;
  type: number;
}
