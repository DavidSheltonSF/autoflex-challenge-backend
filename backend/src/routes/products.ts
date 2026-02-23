import { Router } from 'express';
import { expressHttpAdapter } from './adapters/expressHttpAdapter';
import { makeProductsController } from '../controllers/factories/makeProductsController';

const productsController = makeProductsController();

export function configProductsRoutes(router: Router) {
  router.post('/products', expressHttpAdapter(productsController.create));
  router.get('/products', expressHttpAdapter(productsController.findAll));
  router.get('/products/:id', expressHttpAdapter(productsController.findById));
  router.put('/products/:id', expressHttpAdapter(productsController.updateById));
  router.delete('/products/:id', expressHttpAdapter(productsController.deleteById));
  router.get(
    '/products/:id/commodities',
    expressHttpAdapter(productsController.findAllCommodities)
  );
  router.post('/products/:id/commodities', expressHttpAdapter(productsController.addCommodity));
  router.delete(
    '/products/:productId/commodities/:commodityId',
    expressHttpAdapter(productsController.removeCommodity)
  );
  router.get('/availableProducts', expressHttpAdapter(productsController.findAllAvailableProducts));
}
