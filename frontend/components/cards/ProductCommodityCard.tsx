import { TrashIcon } from '../icons/TrashIcon';
import { LabelValue } from '../LabelValue';
import { Dispatch, SetStateAction, useContext } from 'react';
import { fetchDeleteProductCommodity } from '@/services/fetchDeleteProductCommodity';
import { ProductModalContext } from '@/contexts/ProductModalContext';
import { captalizeString } from '@/lib/captalizeString';

interface Props {
  id: string;
  code: string;
  name: string;
  quantity: number;
  setRerender: Dispatch<SetStateAction<boolean>>
}

export function ProductCommodityCard({ id, code, name, quantity, setRerender }: Props) {

  const productModalContext = useContext(ProductModalContext);
  if (!productModalContext) {
    throw Error('Missing ProductModalContext');
  }


  const productId = productModalContext.modalState.entityId;

  async function handleDelete() {
    try {
      fetchDeleteProductCommodity(productId || '', id);
      setRerender(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className="flex flex-col gap-[16px] w-full wbg-white border border-black/80 p-[16px] rounded-lg">
      <header className="flex justify-between">
        <h1 className="text-xl">{captalizeString(name)}</h1>
        <div className="flex">
          <button className="cursor-pointer" onClick={handleDelete}>
            <TrashIcon width="24px" height="24px" />
          </button>
        </div>
      </header>
      <div className="flex gap-[8px] text-lg">
        <LabelValue label="code" value={code} />
        <LabelValue label="quantity" value={quantity} />
        <div className="flex flex-col gap-[8px] min-lg:flex-row justify-between"></div>
      </div>
    </article>
  );
}
