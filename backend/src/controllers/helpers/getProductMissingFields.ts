import { Product } from '../../types/Product';

export function getProductMissingFields(product: Product): string[] {
  const missingFields = [];
  const { code, name, price } = product;

  if (!code) {
    missingFields.push('code');
  }

  if (!name) {
    missingFields.push('name');
  }

  if (!price) {
    missingFields.push('price');
  }

  return missingFields;
}
