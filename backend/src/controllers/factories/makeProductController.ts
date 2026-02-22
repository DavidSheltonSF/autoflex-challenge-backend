import { PostgresProductsRepository } from '../../repositories/products/PostgresProductsRepository';
import { ProductService } from '../../services/products/ProductService';
import { IProductController } from '../products/IProductController';
import { ProductController } from '../products/ProductController';

export function makeProductController(): IProductController {
  const productsRepository = new PostgresProductsRepository();
  const productsService = new ProductService(productsRepository);
  const productController = new ProductController(productsService);
  return productController;
}
