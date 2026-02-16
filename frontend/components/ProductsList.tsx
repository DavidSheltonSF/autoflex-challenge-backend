import { Product } from '@/types/Product';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
}

export function ProductsList({ products }: Props) {
  const renderProducts = products.map((product, index) => {
    return <ProductCard key={index} {...product} />;
  });

  return <div className="flex flex-col gap-[24px] w-full">{renderProducts}</div>;
}
