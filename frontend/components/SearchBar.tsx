import { SearchIcon } from './icons/SearchIcon';

export function SearchBar() {
  return (
    <div className="flex h-[40px] w-full min-lg:w-[524px] bg-white rounded-xl border">
      <span className="flex gap-[4px] items-center px-[8px]">
        <SearchIcon height="32px" width="32px" />
        <input className="w-full px-[8px]" type="text" placeholder="Search for a product..." />
      </span>
    </div>
  );
}
