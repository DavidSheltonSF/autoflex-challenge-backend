import { describe, expect, test } from '@jest/globals';
import { CommoditiesService } from '../../services/commodities/CommoditiesService';
import { CommoditiesController } from './CommoditiesController';
import { HttpRequest } from '../types/HttpRequest';
import { CommoditiesRepositoryMock } from '../../tests/mocks/CommoditiesRepositoryMock';

describe('Testing CommoditiesController', () => {
  function mockup() {
    const commoditiesRepository = new CommoditiesRepositoryMock();
    const commoditiesService = new CommoditiesService(commoditiesRepository);
    const commoditiesController = new CommoditiesController(commoditiesService, commoditiesService);

    return {
      commoditiesRepository,
      commoditiesService,
      commoditiesController,
    };
  }

  test('should call commoditiesRepository.findAll()', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();
    await commoditiesController.findAll({});
    expect(commoditiesRepository.findAllWasCalled).toBeTruthy();
  });

  test('should call commoditiesRepository.findById() with the id provided and return OK (200)', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();
    const id = '22';
    const httpRequest: HttpRequest = {
      params: { id },
    };
    const response = await commoditiesController.findById(httpRequest);

    expect(commoditiesRepository.findByIdParam?.id).toBe(id);
    expect(response.status).toBe(200);
  });

  test('should call commoditiesRepository.create() with data provided and return OK (200)', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const newCommodity = {
      code: 'prod1234',
      name: 'cadeira de ferro',
      quantity: 500,
    };

    const httpRequest: HttpRequest = {
      body: newCommodity,
    };
    const response = await commoditiesController.create(httpRequest);

    expect(response.status).toBe(200);
    expect(commoditiesRepository.createParam?.code).toBe(newCommodity.code);
    expect(commoditiesRepository.createParam?.name).toBe(newCommodity.name);
    expect(commoditiesRepository.createParam?.quantity).toBe(newCommodity.quantity);
  });

  test('should not call commoditiesRepository.create and return UNPROCESSABLE_CONTENT (422) if a invalid field is provided', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const newCommodity = {
      code: 'invalideraearae1234',
      name: 'cadeira de ferro',
      quantity: 500,
    };

    const httpRequest: HttpRequest = {
      body: newCommodity,
    };

    const result = await commoditiesController.create(httpRequest);

    expect(result.status).toBe(422);
    expect(commoditiesRepository.createParam).toBeFalsy();
  });

  test('should not call commoditiesRepository.create and return UNPROCESSABLE_CONTENT (422) if required fields are missing', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const newCommodity = {
      code: 'invalideraearae1234',
      name: 'cadeira de ferro',
      quantity: 500,
    };

    const httpRequest: HttpRequest = {
      body: newCommodity,
    };

    const result = await commoditiesController.create(httpRequest);

    expect(result.status).toBe(422);
    expect(commoditiesRepository.createParam).toBeFalsy();
  });

  test('should call commoditiesRepository.updateById with id and data provided and return OK (200)', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const id = '22';
    const commodity = {
      code: 'prod1234',
      name: 'cadeira de ferro-updated',
      quantity: 500,
    };

    const httpRequest: HttpRequest = {
      params: { id },
      body: commodity,
    };

    const response = await commoditiesController.updateById(httpRequest);

    expect(response.status).toBe(200);
    expect(commoditiesRepository.updateParam?.id).toBe(id);
    expect(commoditiesRepository.updateParam?.commodity.code).toBe(commodity.code);
    expect(commoditiesRepository.updateParam?.commodity.name).toBe(commodity.name);
    expect(commoditiesRepository.updateParam?.commodity.quantity).toBe(commodity.quantity);
  });

  test('should not call commoditiesRepository.updateById with id and data provided and return BAD_REQUEST (400) if required fields are missing', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const id = '22';
    const commodity = {
      name: 'cadeira de ferro-updated',
    };

    const httpRequest: HttpRequest = {
      params: { id },
      body: commodity,
    };

    const response = await commoditiesController.updateById(httpRequest);
    console.log(response);

    expect(response.status).toBe(400);
    expect(commoditiesRepository.updateParam).toBeFalsy();
  });

  test('should call commoditiesRepository.deleteById with the id provided and return OK (200)', async () => {
    const { commoditiesController, commoditiesRepository } = mockup();

    const id = '22';
    const httpRequest: HttpRequest = {
      params: { id },
    };

    const response = await commoditiesController.deleteById(httpRequest);
    expect(response.status).toBe(200);
    expect(commoditiesRepository.deleteParam?.id).toBe(id);
  });
});
