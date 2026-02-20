import { Commodity } from '../../types/Commodity';
import { WithId } from '../../types/WithId';

export interface CommoditiesRepository {
  findAll: () => Promise<WithId<Commodity[]>>;
  findById: () => Promise<WithId<Commodity>>;
  create: (commodity: Commodity) => Promise<WithId<Commodity>>;
  update: (id: string, commodity: Commodity) => Promise<WithId<Commodity>>;
  delete: (id: string) => Promise<WithId<Commodity>>;
}
