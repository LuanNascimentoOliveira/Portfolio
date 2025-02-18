import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
// import Skill from './pages/Skill';
// import Project from './pages/Project';
// import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Footer from './components/Footer';
import { Element } from 'react-scroll';


//TODO cuidado com o  px-36 pt-7 afeta o menu div className='w-auto h-full px-36 pt-7'>
function App() {

  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Header />
    }
  ])
  return (
    <>
      <div className='w-full h-full'>
        <RouterProvider router={router} />

        <Element name="Home">
          <Home />
        </Element>
         <Element name="About">
          <About />
        </Element>
        {/*<Element name="Skills">
          <Skill />
        </Element>
        <Element name="Projects">
          <Project />
        </Element>
        <Element name="Contactme">
          <Contact />
        </Element>
        <Footer /> */}
      </div>
    </>
  )
}

export default App
