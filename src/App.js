import './App.css';
import { Header, About, SocialLinks, Skills, Contact } from "../src/sections/index";
import ScrollToTop from './components/scrolling/ScrollToTop';



function App() {
  return (
    <div>
      <ScrollToTop />
    <div className='Apps'>
      
 
  <Header />
  <SocialLinks />
  <About />
  <Skills />
  <Contact />
 
  </div>
  </div>
  );
}

export default App;
