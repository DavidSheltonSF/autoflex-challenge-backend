import { InvalidCodeError } from '../../services/errors/InvalidCodeError';
import { InvalidFieldError } from '../../services/errors/InvalidFieldError';
import { ICommoditiesService } from '../../services/commodities/ICommoditiesService';
import { HttpResponseFactory } from '../factories/HttpResponseFactory';
import { getCommodityMissingFields } from '../helpers/getCommodityMissingFields';
import { HttpRequest } from '../types/HttpRequest';
import { ICommoditiesController } from './ICommoditiesController';

import {
  findAllResponse,
  findByIdResponse,
  createResponse,
  deleteByIdResponse,
  updateByIdResponse,
} from './responses';

export class CommoditiesController implements ICommoditiesController {
  constructor(
    private readonly commoditieservice: ICommoditiesService,
    private readonly commoditiesService: ICommoditiesService
  ) {}
  findAll = async (httpRequest: HttpRequest): Promise<findAllResponse> => {
    const result = await this.commoditieservice.findAll();
    return HttpResponseFactory.makeOk({ data: result });
  };

  findById = async (httpRequest: HttpRequest): Promise<findByIdResponse> => {
    const { id } = httpRequest.params;
    const result = await this.commoditieservice.findById(id);
    if (!result) {
      return HttpResponseFactory.makeNotFound({
        message: `Commodity with id '${id} was not found.`,
      });
    }

    return HttpResponseFactory.makeOk({ data: result });
  };

  create = async (httpRequest: HttpRequest): Promise<createResponse> => {
    try {
      const { body } = httpRequest;
      if (!body) {
        return HttpResponseFactory.makeBadRequest({ message: 'Missing body request' });
      }

      const missingFields = getCommodityMissingFields(body);
      if (missingFields.length > 0) {
        return HttpResponseFactory.makeBadRequest({
          message: `Missing required fields: ${missingFields.toLocaleString()}`,
        });
      }

      const { code, name, quantity } = body;
      if (!code || !name || !quantity) {
        return HttpResponseFactory.makeBadRequest({ message: `Missing required fields` });
      }

      const result = await this.commoditieservice.create({ code, name, quantity });

      return HttpResponseFactory.makeCreated({ data: result });
    } catch (error: any) {
      console.log(error);

      if (error instanceof InvalidCodeError) {
        return HttpResponseFactory.makeUnprocessableContent({ message: error.message });
      }

      if (error instanceof InvalidFieldError) {
        return HttpResponseFactory.makeUnprocessableContent({ message: error.message });
      }

      return HttpResponseFactory.makeServerError({ message: 'Something went wrong in the server' });
    }
  };
  updateById = async (httpRequest: HttpRequest): Promise<updateByIdResponse> => {
    try {
      const { id } = httpRequest.params;
      const { body } = httpRequest;

      if (!id) {
        return HttpResponseFactory.makeBadRequest({ message: 'Missing commodity id' });
      }

      if (!body) {
        return HttpResponseFactory.makeBadRequest({ message: 'Missing body request' });
      }

      const missingFields = getCommodityMissingFields(body);
      if (missingFields.length > 0) {
        return HttpResponseFactory.makeBadRequest({
          message: `Missing required fields: ${missingFields.toString()}`,
        });
      }

      const { code, name, quantity } = body;

      const exists = await this.commoditieservice.checkExistence(id);
      if (!exists) {
        return HttpResponseFactory.makeNotFound({
          message: `Commodity with id '${id} was not found`,
        });
      }
      const result = await this.commoditieservice.updateById(id, { code, name, quantity });

      return HttpResponseFactory.makeOk({ data: result });
    } catch (error) {
      console.log(error);

      if (error instanceof InvalidCodeError) {
        return HttpResponseFactory.makeUnprocessableContent({ message: error.message });
      }

      if (error instanceof InvalidFieldError) {
        return HttpResponseFactory.makeUnprocessableContent({ message: error.message });
      }

      return HttpResponseFactory.makeServerError({ message: 'Something went wrong in the server' });
    }
  };
  deleteById = async (httpRequest: HttpRequest): Promise<deleteByIdResponse> => {
    const { id } = httpRequest.params;

    if (!id) {
      return HttpResponseFactory.makeBadRequest({ message: 'Missing commodity id' });
    }

    const exists = await this.commoditieservice.checkExistence(id);
    if (!exists) {
      return HttpResponseFactory.makeNotFound({
        message: `Commodity with id '${id} was not found`,
      });
    }
    const result = await this.commoditieservice.deleteById(id);

    return HttpResponseFactory.makeOk({ data: result });
  };
}
