import { CommoditiesList } from '../CommoditiesList';
import { commodities } from '@/fakeData/commodities';
import { SearchBar } from '../SearchBar';

export function CommoditiesSection() {
  return (
    <div className="flex flex-col gap-[24px]">
      <SearchBar />
      <CommoditiesList commodities={commodities} />
    </div>
  );
}
