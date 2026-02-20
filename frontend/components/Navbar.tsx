import Link from 'next/link';
import { NewNavItem } from './NewNavItem';

export function Navbar() {
  return (
    <nav className="flex w-full justify-center p-[8px] bg-gray-800 text-white">
      <ul className="flex gap-[12px] text-xl">
        <Link href="/">
          <NewNavItem name="products" />
        </Link>
        <Link href="/Commodities">
          <NewNavItem name="commodities" />
        </Link>
      </ul>
    </nav>
  );
}
