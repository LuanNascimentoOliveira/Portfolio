import MaskGroup from '/assets/img/Mask group.svg';
import Git from '/assets/img/git.svg';
import Linkedin from '/assets/img/linkedin.svg';
import Arrow from '/assets/icons/Arrow Down.svg';
import CV from '/assets/img/CV.svg';
import docCv from '/assets/docs/CV - Luan Nascimento Oliveira.pdf';

const Home = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col pt-20 space-y-40 lg:space-y-24 lg:px-24 lg:pt-10'>

        <div className='justify-center flex items-center lg:justify-between lg:space-x-16 lg:w-full '>
          
          <div className='lg:w-[50%] lg:h-auto lg:space-y-[14px] justify-center flex items-center flex-col'>

            <p className='text-4xl w-4/5 lg:text-6xl lg:text-left lg:w-full'>
              Hello, I’m <span className='text-purple'>Luan</span> Oliveira
            </p>

            <p className='w-4/5 text-purple text-sm lg:text-lg lg:w-full lg:h-auto'>
              Back end developer.
            </p>

            <p className='w-[90%] text-center text-sm pt-3 lg:text-left lg:text-lg lg:h-auto lg:w-full'>
              Good experience with systems development, ranging from testing,
              <p>back-end development to front-end.</p>
            </p>

          </div>

          <div className="hidden lg:rounded-full lg:h-80 lg:w-80 lg:flex lg:bg-purple">
            <img src={MaskGroup} alt="Mask Group" />
          </div>
        </div>

        <div className='flex justify-center items-center gap-4 lg:w-full lg:justify-start '>
          
          <div className="rounded-full h-[3rem] w-[3rem] bg-white justify-center flex items-center lg:rounded-2xl shadow-custom cursor-pointer lg:h-16 lg:w-16">
            <a href="https://github.com/LuanNascimentoOliveira" target="_blank" className='cursor-pointer w-9 rounded-full flex justify-center items-center m-0 p-0'>
              <img  src={Git} alt="Git" />
            </a>
          </div>

          <div className="rounded-full h-[3rem] w-[3rem] bg-white justify-center flex items-center lg:rounded-2xl shadow-custom cursor-pointer lg:h-16 lg:w-16">
            <a href="https://www.linkedin.com/in/luan-n-oliveira/" target="_blank" className='cursor-pointer w-7 rounded-full flex justify-center items-center m-0 p-0'>
              <img src={Linkedin} alt="Linkedin" />
            </a>

          </div>

          <div className="rounded-full h-[3rem] w-[3rem] bg-white justify-center flex items-center lg:rounded-2xl shadow-custom cursor-pointer lg:h-16 lg:w-16">
            <a href={docCv} download="CV - English - Luan Nascimento Oliveira.pdf" className='cursor-pointer w-9 rounded-full flex justify-center items-center m-0 p-0'>
              <img src={CV} alt="Linkedin" />
            </a>

          </div>
        </div>

        <div className='justify-center flex gap-2 lg:pt-2'>
          <div>Scroll</div>
          <img src={Arrow} />
        </div>

      </div>

    </>
  );
};

export default Home;
