import { CommodityCard } from './CommodityCard';
import { Commodity } from '@/types/Commodity';

interface Props {
  commodities: Commodity[];
}

export function CommoditiesList({ commodities }: Props) {
  const renderProducts = commodities.map((commodity, index) => {
    return <CommodityCard key={index} {...commodity} />;
  });

  return <div className="flex flex-col gap-[24px] w-full">{renderProducts}</div>;
}
