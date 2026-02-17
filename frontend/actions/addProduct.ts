import { fetchAddProduct } from '@/services/fetchAddProduct';
import { FechingState } from '@/types/FechingState';
import { Product } from '@/types/Product';
import { RequestStatus } from '@/types/RequestStatus';

export async function addProduct(formData: FormData): Promise<FechingState<null>> {
  try {
    const code = formData.get('code');
    const name = formData.get('name');
    const price = formData.get('price');
    const quantity = formData.get('quantity');

    if (!code || !name || !price || !quantity) {
      return { status: RequestStatus.error, message: 'Missing required fields' };
    }

    await fetchAddProduct(formData);
    return { status: RequestStatus.ok, message: 'Product added successfuly' };
  } catch (error) {
    console.log(error);
    return { status: RequestStatus.error, message: 'Something went wrong' };
  }
}
