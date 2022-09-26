import { IsProductTrend, Popularity, Supply } from 'types';

export const POPULARITY = new Map<Popularity, number>([
  [Popularity.UNKNOWN, 1],
  [Popularity.LOW, 0.8],
  [Popularity.AVERAGE, 1],
  [Popularity.HIGH, 1.2],
  [Popularity.VERY_HIGH, 1.4],
]);

export const SUPPLY = new Map<Supply, number>([
  [Supply.UNKNOWN, 1],
  [Supply.NONEXISTENT, 1.6],
  [Supply.INSUFFICIENT, 1.3],
  [Supply.SUFFICIENT, 1],
  [Supply.SURPLUS, 0.8],
  [Supply.OVERFLOWING, 0.6],
]);

export function calculateModifier(trendData: IsProductTrend) {
  return POPULARITY.get(trendData.popularity)! * SUPPLY.get(trendData.supply)!;
}

export function calculateNormalizedValue(trendData: IsProductTrend) {
  const modifier = calculateModifier(trendData);

  if (modifier === 1) {
    return 0;
  } else if (modifier < 1) {
    const min = 0.48;
    const max = 2.24;

    const value = 100 - ((modifier - min)/(max - min)*100);
    return value;
  } else {
    const min = 0.48;
    const max = 2.24;

    const value = ((modifier - min)/(max - min)*100);
    return value;
  }
}
