import { calculateProductQuantityToMake } from './calculateProductQuantityToMake';

export function getViableProducts(data: any) {
  const products: any[] = [];

  data.forEach((row: any) => {
    const result = calculateProductQuantityToMake(row);
    if (result && result > 0) {
      const validatedProduct = row[0];
      products.push({
        id: validatedProduct.id,
        name: validatedProduct.name,
        price: validatedProduct.price,
        quantity: result,
      });
    }
  });

  return products;
}
