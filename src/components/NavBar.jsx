import { useState } from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function NavBar() {
  const [MobileNav, setMobileNav] = useState(false);
  function handleClick() {
    setMobileNav((open) => !open);
  }
  return (
    <nav
      className={`w-full  z-[1000000] bg-white fixed top-0   h-32  flex justify-between items-center lg:px-32 md:px-12 px-8 text-lg font-medium transition-all shadow `}
    >
      <Link to="/home">
        <img src="/img/logo.png" alt="logo" className=" h-14" />
      </Link>

      <ul className={`flex gap-6  `}>
        <ul
          className={` ${
            MobileNav
              ? 'bg-stone-200 flex w-screen absolute h-screen z-[100] left-0 top-0 sm:hidden items-center justify-center flex-col gap-4 text-xl transition-all duration-300'
              : 'flex gap-6'
          } `}
        >
          <li
            onClick={handleClick}
            className={`${MobileNav ? 'block' : 'hidden sm:block'}`}
          >
            <Link to="/categories/all">CATEGORIES</Link>
          </li>
          <li
            onClick={handleClick}
            className={`${MobileNav ? 'block' : 'hidden sm:block'}`}
          >
            PRODUCT PAGE
          </li>
        </ul>
        <li>
          <HiOutlineShoppingCart className="h-auto text-2xl" />
        </li>
        <button
          className="sm:hidden  flex items-center text-2xl z-[1000] "
          onClick={handleClick}
        >
          {' '}
          {MobileNav ? <IoCloseSharp /> : <IoMenuSharp />}
        </button>
      </ul>
      {/* <ul
        className={` bg-stone-200 h-full flex w-screen absolute z-[100] left-0 top-0 sm:hidden items-center justify-center flex-col gap-4 text-xl transition-all duration-300 ${
          MobileNav ? ' opacity-1   ' : ' opacity-0 hidden'
        }`}
      >
        <li>
          <Link to="/categories/all">CATEGORIES</Link>
        </li>
        <li>PRODUCT PAGE</li>
      </ul> */}
    </nav>
  );
}

export default NavBar;
