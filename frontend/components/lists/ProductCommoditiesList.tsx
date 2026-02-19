'use client';
import { Dispatch, SetStateAction, useContext } from 'react';
import { AddProductModalContext } from '@/contexts/AddProductModalContext';
import { WithId } from '@/types/WithId';
import { Commodity } from '@/types/Commodity';
import { ProductCommodityCard } from '../cards/ProductCommodityCard';

interface Props {
  commodities: WithId<Commodity>[];
  setRerender: Dispatch<SetStateAction<boolean>>
}

export function ProductCommoditiesList({ commodities, setRerender }: Props) {
  const renderProducts = commodities.map((commodities, index) => {
    return <ProductCommodityCard setRerender={setRerender} key={index} {...commodities} />;
  });


  const context = useContext(AddProductModalContext);
  if (!context) {
    throw Error('Missing AddProductModalContext');
  }

  return (
    <div className="flex flex-col gap-[24px] w-full">
  
      <div className="flex flex-col gap-[24px]">
  
        {renderProducts}
      </div>
    </div>
  );
}
