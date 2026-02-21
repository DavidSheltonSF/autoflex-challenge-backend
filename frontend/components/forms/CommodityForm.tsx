import { Commodity } from '@/types/Commodity';
import { Input } from '../Input';

interface Props {
  formAction: (formData: FormData) => void | Promise<void>;
  buttonLabel: string;
  data?: Commodity | null;
}

export function CommodityForm({ formAction, buttonLabel, data }: Props) {
  return (
    <form className="flex flex-col gap-[16px] size-full">
      <div className="flex flex-col min-lg:flex-row gap-[16px]">
        <Input name="code" placeholder="code" maxLength={8} minLength={8} defaultValue={data?.code} />
        <Input
          name="quantity"
          type="number"
          placeholder="quantity"
          defaultValue={String(data?.quantity)}
        />
      </div>
      <Input
        name="name"
        placeholder="name"
        defaultValue={data?.name}
      />
      <button
        formAction={formAction}
        className="w-full min-lg:w-[156px] min-lg:ml-auto bg-color-primary text-color-white py-[4px] rounded-md cursor-pointer"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
