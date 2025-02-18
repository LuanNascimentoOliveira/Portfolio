import Pin from '/assets/icons/Pin.svg';
import Calendar from '/assets/icons/Calendar.svg';
import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';

const About = () => {
  return (
    <>
      <div className='animate-appear animPage space-y-10 justify-center items-center px-4 pt-5 lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-10 lg:px-24 lg:pt-10'>

        <div className="text-center lg:flex lg:flex-col lg:justify-start lg:items-start">
          <h1 className="text-4xl lg:text-5xl">About <span className="text-purple">Me</ span>
          </h1>
          <p className='text-sm lg:text-lg lg:text-center lg:w-full'>
            My Introduction
          </p>
        </div>

        <div className="text-justify text-sm lg:pl-7 lg:text-lg">
          <p>I have a degree in Systems Analysis and Development from Estácio de Sá, an MBA in Software Engineering from Impacta, in Brazil, and a Professional Technical Course in Digital Games Development at the Polytechnic Institute of Maia, in Portugal. I have a keen interest in technology and in finding new and simple solutions that increase productivity and have a positive impact on people.
          </p>
        </div>

        <div className="justify-center items-center lg:grid lg:grid-rows-1 lg:grid-flow-col lg:w-full">

          <div className="grid grid-rows-4 grid-flow-col gap-2 lg:gap-y-5 lg:text-sm lg:w-2/3">
            <h2 className="text-2xl justify-center">
              Work Experience
            </h2>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='w-full text-lg'>
                Front-end developer
              </span>
              <span className='w-full text-sm lg:text-base'>
                Lusoinfo II Multimédia S.A
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Portugal
              </span>
              <span className='justify-start flex items-center gap-1 pr-4 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                02/2024 - 07/2024
              </span>
            </div>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='w-full text-lg'>
                Software engineer
              </span>
              <span className='w-full text-sm lg:text-base'>
                Itaú Unibanco
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Brazil
              </span>
              <span className='justify-start flex items-center gap-1 pr-4 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                09/2020 - 05/2023
              </span>
            </div>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='w-full text-lg'>
                QA JR. Test Analyst
              </span>
              <span className='w-full text-sm lg:text-base'>
                Itaú Unibanco
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Brazil
              </span>
              <span className='justify-start flex items-center gap-1 pr-4 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                02/2020 - 09/2020
              </span>
            </div>
          </div>

          <div className="mt-9 grid grid-rows-4 grid-flow-col gap-2 lg:gap-y-5 lg:text-sm lg:w-96 lg:mt-0 ">
            <h2 className="text-2xl justify-center"> Education</h2>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='text-lg flex w-full'>
                Multimedia production and digital games
              </span>
              <span className='w-full text-sm lg:text-base'>Polytechnic Institute of Maia - IPMAIA
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base h-5'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Portugal
              </span>
              <span className='w-50 justify-start flex items-center gap-1 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                09/2022 - 09/2024
              </span>
            </div>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='w-full text-lg'>
                MBA in software engineering
              </span>
              <span className='justify-start items-center flex text-sm lg:text-base w-full'>
                Impacta Tecnologia
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Brazil
              </span>
              <span className='justify-start flex items-center gap-1 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                03/2021 - 04/2022
              </span>
            </div>
            <div className='justify-start items-center flex flex-wrap'>
              <span className='w-full text-lg'>
                Systems analysis and development
              </span>
              <span className='w-full justify-start items-center flex text-sm lg:text-base'>
                University Estácio de Sá
              </span>
              <span className='justify-start flex items-center gap-1 w-24 text-sm lg:text-base'>
                <img src={Pin} alt="Pin" className='w-3 h-3' />
                Brazil
              </span>
              <span className='justify-start flex items-center gap-1 text-sm lg:text-base'>
                <img src={Calendar} alt="Mask Group" className='w-3 h-3' />
                01/2017 - 02/2019
              </span>
            </div>
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

export default About;
