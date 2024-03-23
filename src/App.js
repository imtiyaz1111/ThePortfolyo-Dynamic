import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Timeline/>
    <Testimonial/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
