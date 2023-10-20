import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormBig from './components/TextFormBig';

function App() {
  return (
    <>
      <Navbar title="TetxUtils" /> <br />
      <TextFormBig title="Enter text" />
      <About/>
    </>
  );
}

export default App;
