import { Commodity } from '../../types/Commodity';
import { WithId } from '../../types/WithId';
import { HttpResponse } from '../types/HttpResponse';

export type findAllResponse = HttpResponse<WithId<Commodity>[]>;
export type findByIdResponse = HttpResponse<WithId<Commodity> | { message: string }>;
export type createResponse = HttpResponse<WithId<Commodity> | { message: string }>;
export type updateByIdResponse = HttpResponse<WithId<Commodity> | { message: string }>;
export type deleteByIdResponse = HttpResponse<WithId<Commodity> | { message: string }>;
