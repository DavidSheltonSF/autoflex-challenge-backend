import { createContext } from 'react';
import { ModalContext } from './ModalContext';

export const AddProductModalContext = createContext<ModalContext | null>(null);
