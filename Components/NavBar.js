import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-[#BAD4AA] shadow-lg fixed w-full z-20 top-0 border-b-2 border-[#EBF5DF]">
      <div className="flex py-4 flex-wrap justify-around items-center">
        <h1 className="text-xl font-semibold text-[#2C3639]"><b>ListiFy</b></h1>
        <ul className="flex gap-[50px] text-m">
          <li className="text-[#2C3639] hover:text-[#3F4E4F] transition-colors duration-200 font-medium">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#2C3639] hover:text-[#3F4E4F] transition-colors duration-200 font-medium">
            <Link href="/about">About</Link>
          </li>
          {/* <li className="text-[#2C3639] hover:text-[#3F4E4F] transition-colors duration-200 font-medium">
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
