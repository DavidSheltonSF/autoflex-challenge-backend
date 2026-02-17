import { RequestStatus } from './RequestStatus';

export interface FormState {
  status: RequestStatus;
  message?: string;
}
