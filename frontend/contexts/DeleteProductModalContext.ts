import { createContext, Dispatch, SetStateAction } from 'react';
import { ModalContext } from './ModalContext';

export const DeleteProductModalContext = createContext<ModalContext | null>(null);
