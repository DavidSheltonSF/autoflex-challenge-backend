import { RequestStatus } from './RequestStatus';

export interface FechingState<T> {
  status: RequestStatus;
  message?: string;
  data?: T;
}
