import logo from './logo.svg';
import './App.css';
import { Header, About, Navbar, Projects } from "../src/sections/index";


function App() {
  return (
    <div className='Apps'>

  <Navbar />
  <Header />
  <About />
  <Projects />
  </div>
  );
}

export default App;
