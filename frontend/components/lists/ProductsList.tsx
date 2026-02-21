'use client';
import { Product } from '@/types/Product';
import { ProductCard } from '../cards/ProductCard';
import { AddButton } from '../buttons/AddButton';
import { useContext } from 'react';
import { CardSkeleton } from '../cards/CardSkeleton';
import { AddProductModalContext } from '@/contexts/AddProductModalContext';
import { WithId } from '@/types/WithId';

interface Props {
  products: WithId<Product>[];
  isLoading: boolean;
}

export function ProductsList({ products, isLoading }: Props) {
  const renderNotFoundMessage = (
    <h1 className="text-center text-xl min-lg:text-start">No products were found</h1>
  );
  const renderProducts = products.map((product, index) => {
    return <ProductCard key={index} {...product} />;
  });
  const renderSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < 4; i++) {
      skeletons.push(<CardSkeleton key={i} />);
    }

    return skeletons;
  };

  const context = useContext(AddProductModalContext);
  if (!context) {
    throw Error('Missing AddProductModalContext');
  }

  const { setModalState } = context;

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <AddButton
        label="Add new Product"
        width="180px"
        onClick={() => {
          setModalState({ isOpen: true });
        }}
      />
      <div className="flex flex-col gap-[24px]">
        {isLoading
          ? renderSkeleton()
          : products.length === 0
          ? renderNotFoundMessage
          : renderProducts}
      </div>
    </div>
  );
}
