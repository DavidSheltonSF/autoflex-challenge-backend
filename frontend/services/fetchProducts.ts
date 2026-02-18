import { Product } from '@/types/Product';
import { WithId } from '@/types/WithId';

export async function fetchProducts(): Promise<WithId<Product>[]> {
  const response = await fetch('http://localhost:3002/products');

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();

  return json.data;
}
