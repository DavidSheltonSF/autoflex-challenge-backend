import { AvailableProductsList } from "./AvailableProductsList";

export function AvailableProductsContainer() {
  return (
    <div className="min-lg:absolute flex flex-col right-[16px] top-[80px] bg-color-white border-l border-black/40 h-[90vh] px-[24px]">
      <h1 className="text-2xl font-bold my-[16px] text-black">Available Products</h1>

      <AvailableProductsList />
    </div>
  );
}