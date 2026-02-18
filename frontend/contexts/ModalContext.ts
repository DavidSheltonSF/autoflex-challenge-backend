import { ModalState } from '@/types/ModalState';
import { Dispatch, SetStateAction } from 'react';

export type ModalContext = {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState>>;
};
