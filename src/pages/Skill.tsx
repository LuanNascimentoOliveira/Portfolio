import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';
import loadIcons from "../utils/laodIcons";

const Skill = () => {

  return (
    <>
      <div className='animate-appear animPage space-y-10 justify-center items-center px-4 pt-5 lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-10 lg:px-24 lg:pt-10'>
          <div className="w-full">
            <h1 className="text-5xl text-4xl lg:text-5xl">
              <span className="text-purple">My</ span> skills
            </h1>
            <p className='text-justify text-sm lg:pl-7 lg:text-lg pt-4'>
              Technologies I’ve been working with recently
            </p>
            <div className="grid grid-rows-2 grid-flow-col gap-8 lg:flex lg:flex-wrap lg:justify-center pt-20 lg:gap-16 lg:px-32">
              {loadIcons.tech.map(item =>
                <img key={item} src={item} />
              )}
            </div>
          </div>
          <div className='justify-center items-center flex gap-2 lg:pt-2 w-full'>
            <div>Scroll</div>
            <div className='space-y-1'>
              <img src={ArrowUp} />
              <img src={ArrowDown} />
            </div>
          </div>
        </div>
    </>
  );
};

export default Skill;
