import { Product } from '@/types/Product';
import { WithId } from '@/types/WithId';

export async function fetchProductById(id: string): Promise<WithId<Product>> {
  const response = await fetch(`http://localhost:3002/products/${id}`);

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
