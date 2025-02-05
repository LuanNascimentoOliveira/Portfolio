import { Link } from 'react-scroll';
import { useState } from "react";


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
      <nav className='flex w-full m-0 p-0 top-0 justify-end float-end items-end absolute lg:justify-center lg:items-center'>

        <div className="w-full flex items-center justify-between">
          <span className="w-auto h-auto text-5xl font-serif hidden lg:flex lg:pl-10 lg:pt-5 ">
            Luan N Oliveira
          </span>

          <ul className="hidden text-base gap-6 w-auto items-center justify-end lg:pr-10 lg:pt-5 lg:flex ">
            <Menu />
          </ul>
        </div>

        <div className="pt-10 pr-5">
          <button
            className="lg:hidden border border-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div className="lg:hidden absolute top-full w-auto">
          <ul className={`${isOpen
            ? 'bg-white shadow-md p-4 rounded-md transform transition-transform duration-300 ease-in-out translate-x-0 opacity-100 right-0'
            : 'bg-white shadow-md p-4 rounded-md transform transition-transform duration-300 ease-in-out translate-x-full opacity-0 left-0 '}`}>
            <div className='text-base font-serif text-center'>
              Luan O
            </div>
            <Menu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
