import { API_URL } from '@/config/api';
import { Product } from '@/types/Product';
import { ProductAndCommodity } from '@/types/ProductAndCommodity';
import { WithId } from '@/types/WithId';

export async function fetchAvailableProducts(): Promise<ProductAndCommodity[]> {
  const response = await fetch(`${API_URL}/availableProducts`);

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw Error(errorText);
  }

  const json = await response.json();
  return json.data;
}
