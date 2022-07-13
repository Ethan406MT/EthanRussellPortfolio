import logo from './logo.svg';
import './App.css';
import { Header, About, Navbar, Projects, Contact, Footer } from "../src/sections/index";


function App() {
  return (
    <div className='Apps'>

  <Navbar />
  <Header />
  <About />
  <Projects />
  <Contact />
  <Footer />
  </div>
  );
}

export default App;
