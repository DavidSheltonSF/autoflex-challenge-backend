import { RequestStatus } from './RequestStatus';

export interface FormState<T> {
  status: RequestStatus;
  message?: string;
  data?: T;
}
