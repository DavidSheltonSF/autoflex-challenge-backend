'use client';
import { addProduct } from '@/actions/addProduct';
import { BaseModal } from './BaseModal';
import { useContext, useEffect, useState } from 'react';
import { FechingState } from '@/types/FechingState';
import { AddProductModalContext } from '@/contexts/AddProductModalContext';

export function AddProductModal() {
  const [formState, setFormState] = useState<FechingState<null> | null>(null);

  const context = useContext(AddProductModalContext);
  if (!context) {
    throw Error('Missing AddProductModalContext');
  }
  const { isOpen, setIsOpen } = context;

  async function handleSubmit(formData: FormData) {
    setFormState(await addProduct(formData));
  }

  useEffect(() => {
    function cleanStates() {
      setFormState(null);
    }

    if (!isOpen) {
      cleanStates();
    }
  }, [isOpen]);

  return (
    isOpen && (
      <BaseModal close={() => setIsOpen(false)} additionalStyles="h-auto w-[80vw] min-lg:w-[400px]">
        <div className="flex flex-col gap-[16px] justify-center size-full">
          {formState && (
            <span className="w-full text-center font-bold">
              <p className={formState.status === 'error' ? 'text-red-500' : 'text-green-500'}>
                {formState.message}
              </p>
            </span>
          )}
          <form className="flex flex-col gap-[16px] size-full">
            <input
              name="code"
              className="w-full min-lg:w-[116px] border rounded-md py-[4px] px-[8px]"
              placeholder="code"
            />
            <input
              name="name"
              className="w-full border rounded-md py-[4px] px-[8px]"
              placeholder="name"
            />
            <div className="flex flex-col min-lg:flex-row gap-[16px]">
              <input
                name="price"
                type="number"
                className="w-full border rounded-md py-[4px] px-[8px]"
                placeholder="price"
              />
              <input
                name="quantity"
                type="number"
                className="w-full border rounded-md py-[4px] px-[8px]"
                placeholder="quantity"
              />
            </div>
            <button
              formAction={handleSubmit}
              className="w-full min-lg:w-[156px] min-lg:ml-auto bg-color-primary text-color-white py-[4px] rounded-md cursor-pointer"
            >
              Add Product
            </button>
          </form>
        </div>
      </BaseModal>
    )
  );
}
