import logo from './logo.svg';
import './App.css';
import { Header, About, Navbar } from "../src/sections/index";

function App() {
  return (
    <div className='Apps'>
  <Navbar />
  <Header />
  <About />
  </div>
  );
}

export default App;
