import MaskGroup from '/assets/img/Mask group.svg';
import { Link } from 'react-scroll';

const TitleMenus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Skills", link: "/Skills" },
  { name: "Projects", link: "/Projects" },
  { name: "Contactme", link: "/Contactme" }
];

const Menu = () => (
  <>
    {TitleMenus.map((item, index) => (
      <li key={item.link} className={`${index === 0 ? ' focus:text-purple' : ''} hover:text-purple`}>
        <Link to={item.name} smooth={true} duration={500} className='cursor-pointer'>
          {item.name}
        </Link>
      </li>
    ))}
  </>
);

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => (
  <ul className={`bg-white absolute p-4 rounded-es h-full lg:hidden ${isOpen ? 'animate-openmenu shadow' : 'animate-closemenu'}`}>
    <div className="lg:hidden rounded-full h-20 w-20 flex bg-purple">
      <img src={MaskGroup} alt="Mask Group" />
    </div>
    <div className='text-base font-serif text-center'>
      Luan O
    </div>
    <Menu />
  </ul>
);

export { MobileMenu, Menu };
