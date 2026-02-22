import { CommoditiesRepository } from '../../repositories/commodities/CommoditiesRepository';
import { Commodity } from '../../types/Commodity';
import { WithId } from '../../types/WithId';
import { validateCommodity } from '../helper/validateCommodity';
import { ICommoditiesService } from './ICommoditiesService';

export class CommoditiesService implements ICommoditiesService {
  constructor(private readonly commodityRepository: CommoditiesRepository) {}

  async findAll(): Promise<WithId<Commodity>[]> {
    return await this.commodityRepository.findAll();
  }

  async findById(id: string): Promise<WithId<Commodity> | null> {
    return await this.commodityRepository.findById(id);
  }

  async create(commodity: Commodity): Promise<WithId<Commodity>> {
    validateCommodity(commodity);
    return await this.commodityRepository.create(commodity);
  }

  async updateById(id: string, commodity: Commodity): Promise<WithId<Commodity>> {
    validateCommodity(commodity);
    return await this.commodityRepository.updateById(id, commodity);
  }

  async deleteById(id: string): Promise<WithId<Commodity>> {
    return await this.commodityRepository.deleteById(id);
  }

  async checkExistence(id: string): Promise<boolean> {
    return this.commodityRepository.checkExistence(id);
  }

}
