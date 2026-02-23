import { Commodity } from '../../types/Commodity';

export function getCommodityMissingFields(product: Commodity): string[] {
  const missingFields = [];
  const { code, name, quantity } = product;

  if (!code) {
    missingFields.push('code');
  }

  if (!name) {
    missingFields.push('name');
  }

  if (!quantity) {
    missingFields.push('quantity');
  }

  return missingFields;
}
