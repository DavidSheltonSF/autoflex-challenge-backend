import { PostgresCommoditiesRepository } from '../../repositories/commodities/PostgresCommoditiesRepository';
import { CommoditiesService } from '../../services/commodities/CommoditiesService';
import { ICommoditiesController } from '../commodities/ICommoditiesController';
import { CommoditiesController } from '../commodities/CommoditiesController';

export function makeCommoditiesController(): ICommoditiesController {
  const commoditiesRepository = new PostgresCommoditiesRepository();
  const commoditiesService = new CommoditiesService(commoditiesRepository);
  const commoditiesController = new CommoditiesController(commoditiesService, commoditiesService);
  return commoditiesController;
}
