import { createContext, Dispatch, SetStateAction } from 'react';
import { ModalContext } from './ModalContext';

export const DeleteProductModalContext = createContext<
  | (ModalContext & {
      productId: number | null;
      setProductId: Dispatch<SetStateAction<number | null>>;
    })
  | null
>(null);
