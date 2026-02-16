import { NavItem } from './NavItem';

interface Props {
  selectedSection: number;
  setSelectedSection: React.Dispatch<React.SetStateAction<number>>;
}

export function Navbar({ selectedSection, setSelectedSection }: Props) {
  return (
    <nav className="flex justify-center p-[8px] bg-gray-800 text-white">
      <ul className="flex gap-[12px] text-xl">
        <NavItem
          index={0}
          name="products"
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <NavItem
          index={1}
          name="commodities"
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </ul>
    </nav>
  );
}
