import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from './icons/TrashIcon';
import { LabelValue } from './LabelValue';

interface Props {
  id?: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
}

export function ProductCard({ code, name, price, quantity }: Props) {
  return (
    <article className="flex flex-col gap-[16px] w-full bg-white border border-black/80 p-[16px] rounded-lg">
      <header className="flex justify-between">
        <h1 className="text-2xl">{name}</h1>
        <div className="flex gap-[16px]">
          <EditIcon width="32px" height="32px" />
          <TrashIcon width="32px" height="32px" />
        </div>
      </header>
      <div className="flex flex-col gap-[8px] text-lg">
        <LabelValue label="code" value={code} />
        <LabelValue label="name" value={name} />
        <LabelValue label="price" value={price} />
        <LabelValue label="quantity" value={quantity} />
      </div>
    </article>
  );
}
