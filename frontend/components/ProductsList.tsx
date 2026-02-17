'use client';
import { Product } from '@/types/Product';
import { ProductCard } from './ProductCard';
import { AddButton } from './AddButton';
import { BaseModal } from './modals/BaseModal';
import { AddProductModalContext } from '@/contexts/AddProductModalContext';
import { useContext } from 'react';
import { AddProductModal } from './modals/AddProductModal';

interface Props {
  products: Product[];
}

export function ProductsList({ products }: Props) {
  const renderProducts = products.map((product, index) => {
    return <ProductCard key={index} {...product} />;
  });

  const context = useContext(AddProductModalContext);
  if(!context){
    throw Error('Missing AddProductModalContext');
  }

  const {isOpen, setIsOpen} = context;

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <AddButton
        label="Add new Product"
        width="180px"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <AddProductModal/>
      <div>{renderProducts}</div>
    </div>
  );
}
