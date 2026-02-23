import { ProductAndCommodity } from '../types/ProductAndCommodity';

// Calculate how many products are possible to make with the available commodities
export function calculateProductQuantityToMake(
  productAndCommoditiesGroup: ProductAndCommodity[]
): number {
  let maxProductQuantity = 0;

  productAndCommoditiesGroup.forEach((count) => {
    const calc = Math.floor(count.availableCommodityQuantity / count.commodityQuantity);
    if (maxProductQuantity === 0) {
      maxProductQuantity = calc;
      return;
    }

    if (calc < maxProductQuantity) {
      maxProductQuantity = calc;
    }
  });

  return maxProductQuantity;
}
