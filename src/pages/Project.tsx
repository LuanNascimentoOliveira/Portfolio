import ArrowUp from '/assets/icons/Arrow Up.svg';
import ArrowDown from '/assets/icons/Arrow Down.svg';
import Tc from "/assets/img/projects/TC 1.svg";
import challenger from "/assets/img/projects/challenger.svg";
import watcher from "/assets/img/projects/watcher.svg";


const Project = () => {

  const projects = [
    {
      image: Tc,
      gitLink: 'https://github.com/luanoliveiradasilva/ProjectGame',
      itchLink: '',
      unityLink: ''
    },
    {
      image: challenger,
      gitLink: 'https://github.com/luanoliveiradasilva/UnityChallengeRun/tree/main',
      itchLink: '',
      unityLink: 'https://play.unity.com/pt/games/44854b48-ec14-4458-a1a4-e2a09daed367/unity-mini-challenge'
    },
    {
      image: watcher,
      gitLink: '',
      itchLink: 'https://thefourgameteers.itch.io/the-watcher',
      unityLink: ''
    },
  ];

  return (
    <>
      <div className='animate-appear animPage space-y-10 justify-center items-center px-4 pt-5 lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-10 lg:px-24 lg:pt-10'>
        <div className="w-full text-center lg:flex lg:flex-col lg:justify-start lg:items-start">
          <h1 className="text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className='text-sm lg:text-justify lg:pl-7 lg:text-lg pt-4'>
            Things I’ve built so far
          </p>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-8 lg:pt-20 lg:flex lg:flex-wrap lg:justify-center lg:gap-16 lg:px-32">
          {projects.map((project, index) => (
            <div key={index} className="relative 2xl:w-72  h-80 transition duration-500 hover:scale-105 flex justify-center items-center">
              <img src={project.image} alt={`Image ${index}`} className="w-full h-full object-cover" />

              <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-500 opacity-0 hover:opacity-100 bg-gray-800 bg-opacity-80">
                <div className="text-white text-center p-4 flex flex-col justify-center items-center h-full w-full">
                  <a
                    href={project.gitLink === '' ? '' : project.gitLink}
                    target='_blank' className="block mb-2 text-lg font-semibold hover:text-gray-200 cursor-pointer"
                  >
                    {project.gitLink === '' ? '' : 'View on GitHub'}
                  </a>
                  <a
                    href={project.itchLink === '' ? '' : project.itchLink}
                    target='_blank' className="text-lg font-semibold hover:text-gray-200 cursor-pointer"
                  >
                    {project.itchLink === '' ? '' : 'View on Itch.io'}
                  </a>
                  <a
                    href={project.unityLink === '' ? '' : project.unityLink}
                    target='_blank' className="text-lg font-semibold hover:text-gray-200 cursor-pointer"
                  >
                    {project.unityLink === '' ? '' : 'View on Unity Play'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='justify-center items-center flex gap-2 pt-5 lg:pt-32 w-full'>
        <div>Scroll</div>
        <div className='space-y-1'>
          <img src={ArrowUp} />
          <img src={ArrowDown} />
        </div>
      </div>
    </>
  );
};

export default Project;
