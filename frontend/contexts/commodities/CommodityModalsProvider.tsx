'use client';
import { ReactNode, useState } from 'react';
import { AddCommodityModalContext } from './AddCommodityModalContext';
import { DeleteCommodityModalContext } from './DeleteCommodityModalContext';
import { UpdateCommodityModalContext } from './UpdateCommodityModalContext';
import { ModalState } from '@/types/ModalState';

interface Props {
  children: ReactNode;
}

export function CommodityModalsProvider({ children }: Props) {
  const [addModalState, setAddModalState] = useState<ModalState>({ isOpen: false });
  const [deleteModalState, setDeleteModalState] = useState<ModalState>({
    isOpen: false,
  });
  const [updateModalState, setUpdateModalState] = useState<ModalState>({
    isOpen: false,
  });
  return (
    <UpdateCommodityModalContext
      value={{
        modalState: updateModalState,
        setModalState: setUpdateModalState,
      }}
    >
      <DeleteCommodityModalContext
        value={{
          modalState: deleteModalState,
          setModalState: setDeleteModalState,
        }}
      >
        <AddCommodityModalContext
          value={{ modalState: addModalState, setModalState: setAddModalState }}
        >
          {children}
        </AddCommodityModalContext>
      </DeleteCommodityModalContext>
    </UpdateCommodityModalContext>
  );
}
