'use client';

import { useEffect, useState } from 'react';
import { CommoditiesList } from '../lists/CommoditiesList';
import { fetchCommodities } from '@/services/fetchCommodities';
import { Commodity } from '@/types/Commodity';
import { FechingState } from '@/types/FechingState';
import { RequestStatus } from '@/types/RequestStatus';
import { WithId } from '@/types/WithId';
import { SearchBar } from '../SearchBar';

export function CommoditiesSection() {
  const [fetching, setFeching] = useState<FechingState<WithId<Commodity>[]>>({
    status: RequestStatus.loading,
    data: [],
  });

  const isLoading = fetching.status === RequestStatus.loading ? true : false;

  useEffect(() => {
    async function loadCommodities() {
      try {
        setFeching({ status: RequestStatus.loading });
        const Commodities = await fetchCommodities();
        setFeching({ status: RequestStatus.ok, data: Commodities });
      } catch (error) {
        console.log(error);
        setFeching({ status: RequestStatus.error });
      }
    }
    loadCommodities();
  }, []);
  return (
    <div className="flex flex-col gap-[24px]">
      <SearchBar />
      <CommoditiesList commodities={fetching.data || []} isLoading={isLoading} />
    </div>
  );
}
