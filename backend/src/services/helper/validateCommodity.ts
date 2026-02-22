import { Commodity } from '../../types/Commodity';
import { InvalidCodeError } from '../errors/InvalidCodeError';
import { InvalidFieldError } from '../errors/InvalidFieldError';
import { validadeCode, validateName, validateQuantity } from './fieldsValidators';

export function validateCommodity(product: Commodity) {
  const { code, name, quantity } = product;

  if (!validadeCode(code)) {
    throw new InvalidCodeError(code);
  }

  if (!validateName(name)) {
    throw new InvalidFieldError('name', name);
  }

  if (!validateQuantity(quantity)) {
    throw new InvalidFieldError('quantity', quantity);
  }
}
