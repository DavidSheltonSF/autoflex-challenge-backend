import { Router, type Request, type Response } from 'express';
import { dbConnection } from '..';
import { PostgresCommoditiesRepository } from '../repositories/commodities/PostgresCommoditiesRepository';

const commoditiesRepository = new PostgresCommoditiesRepository();

export function configCommoditiesRoutes(router: Router) {
  router.post('/commodities', async (req: Request, res: Response) => {
    if (!req.body) {
      return res.status(400).json({
        message: 'Missing request body',
      });
    }

    const { code, name, quantity } = req.body;
    if (!code || !name || !quantity) {
      return res.status(400).json({
        message: 'Missing required fields',
      });
    }
    const result = await commoditiesRepository.create({
      code,
      name,
      quantity,
    });
    console.log(result);

    return res.status(201).json({
      data: result,
    });
  });

  router.get('/commodities', async (req: Request, res: Response) => {
    const result = await commoditiesRepository.findAll();
    return res.status(200).json({
      data: result,
    });
  });

  router.get('/commodities/:id', async (req: Request, res: Response) => {
    const commodityId = req.params.id;
    if (!commodityId) {
      return res.status(400).json({
        message: 'Missing commodities id',
      });
    }

    const result = await commoditiesRepository.findById(String(commodityId));
    if (!result) {
      return res.status(404).json({
        message: `Commodity with id ${commodityId} was not found`,
      });
    }

    return res.status(200).json({
      data: result,
    });
  });

  router.put('/commodities/:id', async (req: Request, res: Response) => {
    const commodityId = req.params.id;

    if (!commodityId) {
      return res.status(400).json({
        message: 'Missing commodities id',
      });
    }

    if (!req.body) {
      return res.status(400).json({
        message: 'Missing request body',
      });
    }

    const { code, name, quantity } = req.body;
    if (!code || !name || !quantity) {
      return res.status(400).json({
        message: 'Missing required fields',
      });
    }

    const result = await commoditiesRepository.updateById(String(commodityId), {
      code,
      name,
      quantity,
    });

    return res.status(200).json({
      message: 'UPDATED',
      data: result,
    });
  });

  router.delete('/commodities/:id', async (req: Request, res: Response) => {
    const commodityId = req.params.id;
    if (!commodityId) {
      res.status(400).json({
        message: 'Missing commodity id',
      });
    }

    const result = await commoditiesRepository.deleteById(String(commodityId));

    return res.status(200).json({
      message: 'DELETED',
      data: result,
    });
  });
}
