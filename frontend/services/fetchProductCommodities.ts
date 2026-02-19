import { Commodity } from '@/types/Commodity';
import { Product } from '@/types/Product';
import { WithId } from '@/types/WithId';

export async function fetchProductCommodities(id: string): Promise<WithId<Commodity>[]> {
  const response = await fetch(`http://localhost:3002/products/${id}/commodities`);

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
