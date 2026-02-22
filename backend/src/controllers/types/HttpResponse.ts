import { HttpStatusCodeStr } from './HttpStatusCodeSting';

export interface HttpResponse<T> {
  statusCode: number;
  code: HttpStatusCodeStr;
  data?: T;
  message?: string;
}
