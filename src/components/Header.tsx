
import { useState } from "react";
import {MobileMenu, Menu } from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    } else {
      setIsVisible(true);
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav className='right-0 flex-col fixed top-4 h-full z-20 w-[30%] lg:flex lg:w-full lg:justify-between lg:items-center lg:relative lg:top-0'>
        <div className="w-full flex items-center justify-between">
          <span className="w-auto h-auto text-5xl font-playwrite  hidden lg:flex lg:pl-10 lg:pt-5 ">
            Luan.O
          </span>
          <ul className="hidden text-base gap-6 w-auto items-center justify-end lg:pr-10 lg:pt-5 lg:flex ">
            <Menu />
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="lg:hidden bg-purple p-1 rounded-md shadow-lg"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        {isVisible && <MobileMenu isOpen={isOpen} />}
      </nav>
    </>
  );
};

export default Header;
