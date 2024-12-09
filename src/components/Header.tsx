import React from 'react'; 
import { IoCartOutline, IoHeartOutline, IoSearch, IoPersonOutline } from 'react-icons/io5';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-amber-100">
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-center text-base gap-4 md:gap-9 ml-auto">
            <Link href="/" className="hover:text-blue">Home</Link>
            <Link href="/shop" className="hover:text-blue">Shop</Link> 
            <Link href="/about" className="hover:text-blue">About</Link>
            <Link href="/contact" className="hover:text-blue">Contact</Link>
          </nav>

          {/* Icon Section */}
          <div className="flex items-center gap-4 ml-auto">
            <ul className="flex gap-4">
              <li>
                <Link href="/account">
                  <IoPersonOutline className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/search">
                  <IoSearch className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <IoHeartOutline className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <IoCartOutline className="text-black text-xl" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </div>
  );
};
