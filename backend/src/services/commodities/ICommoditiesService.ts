import { Commodity } from '../../types/Commodity';
import { WithId } from '../../types/WithId';

export interface ICommoditiesService {
  findAll: () => Promise<WithId<Commodity>[]>;
  findById: (id: string) => Promise<WithId<Commodity> | null>;
  create: (commodity: Commodity) => Promise<WithId<Commodity>>;
  updateById: (id: string, commodity: Commodity) => Promise<WithId<Commodity>>;
  deleteById: (id: string) => Promise<WithId<Commodity>>;
  checkExistence: (id: string) => Promise<boolean>;
}
