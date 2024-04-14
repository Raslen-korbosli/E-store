import { useRef, useState } from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function NavBar() {
  const [MobileNav, setMobileNav] = useState(false);
  function handleClick() {
    setMobileNav((open) => !open);
  }
  return (
    <nav
      className={`w-full  z-[1000000] bg-white   h-32  flex justify-between items-center lg:px-32 md:px-12 px-8 text-lg font-medium transition-all shadow `}
    >
      <img src="img/logo.png" alt="" className=" h-14" />

      <ul className="flex gap-6">
        <li className={`hidden sm:block`}>CATEGORIES</li>
        <li className={`hidden sm:block`}>PRODUCT PAGE</li>
        <li>
          <HiOutlineShoppingCart className="h-auto text-2xl" />
        </li>
        <li
          className=" sm:hidden flex items-center text-2xl z-[1000]"
          onClick={handleClick}
        >
          {' '}
          {MobileNav ? <IoCloseSharp /> : <IoMenuSharp />}
        </li>
      </ul>
      <ul
        className={` bg-stone-200 h-screen flex w-screen absolute z-[100]  top-0 sm:hidden items-center justify-center flex-col gap-4 text-xl transition-all duration-300 ${
          MobileNav ? ' opacity-1 left-0  ' : ' opacity-0 left-full'
        }`}
      >
        <li>CATEGORIES</li>
        <li>PRODUCT PAGE</li>
      </ul>
    </nav>
  );
}

export default NavBar;
