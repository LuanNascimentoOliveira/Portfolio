import ArrowUp from '/assets/icons/Arrow Up.svg';

const Contact = () => {
  return (
    <>
      <div className='animate-appear animPage space-y-10 justify-center items-center px-4 pt-5 lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-10 lg:px-24 lg:pt-10'>
        <div className="w-full text-center lg:flex lg:flex-col lg:justify-start lg:items-start">
          <h1 className="text-4xl lg:text-5xl">
            Contact <span className="text-purple">me</ span>
          </h1>
          <p className='text-sm lg:text-justify lg:pl-7 lg:text-lg pt-4'>
            I’m just a message away.
          </p>
        </div>
        <div className="w-full text-xl justify-center items-center flex text-center lg:h-3/4 lg:text-5xl">
          For any questions please mail me:
          luanoliveira1107@gmail.com
        </div>
        <div className='justify-center items-center flex gap-2 lg:pt-24 w-full h-full'>
          <div>Scroll</div>
          <img src={ArrowUp} />
        </div>
      </div>
    </>
  );
};

export default Contact;
