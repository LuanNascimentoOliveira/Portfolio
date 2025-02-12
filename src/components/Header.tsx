import { Link } from 'react-scroll';
import { useState } from "react";
import MaskGroup from '/assets/img/Mask group.svg';

const menuData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Skills", link: "/Skills" },
  { name: "Projects", link: "/Projects" },
  { name: "Contactme", link: "/Contactme" }
];

const Menu = () => {
  return (
    <>
      {menuData.map((item, index) => (
        <li key={item.link} className={`${index === 0 ? ' focus:text-purple' : ''} hover:text-purple`}>
          <Link to={item.name} smooth={true} duration={500} className='cursor-pointer'>
            {item.name}
          </Link>
        </li>
      ))}
    </>
  )
}


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='right-0 flex-col fixed top-4 h-full z-20 w-[30%] lg:flex lg:w-full lg:justify-between lg:items-center lg:relative lg:top-0'>

        <div className="w-full flex items-center justify-between">
          <span className="w-auto h-auto text-5xl font-serif hidden lg:flex lg:pl-10 lg:pt-5 ">
            Luan N Oliveira
          </span>

          <ul className="hidden text-base gap-6 w-auto items-center justify-end lg:pr-10 lg:pt-5 lg:flex ">
            <Menu />
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="lg:hidden bg-purple p-1 rounded-md shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <ul className={`bg-white p-4 rounded-es transform transition-transform duration-300 ease-in-out h-full lg:hidden ${isOpen
          ? ' translate-x-0 opacity-100 right-0 shadow'
          : 'translate-x-full opacity-0 hidden left-0'}`}>
          <div className="lg:hidden rounded-full h-20 w-20 flex bg-purple">
            <img src={MaskGroup} alt="Mask Group" />
          </div>
          <div className='text-base font-serif text-center'>
            Luan O
          </div>
          <Menu />
        </ul>

      </nav>
    </>
  );
};

export default Header;
