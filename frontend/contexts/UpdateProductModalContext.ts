import { createContext } from 'react';
import { ModalContext } from './ModalContext';

export const UpdateProductModalContext = createContext<ModalContext | null>(null);
